# coding=utf-8
import re
from random import randint
from time import sleep

from requests import get, ReadTimeout
from urllib3.exceptions import ReadTimeoutError

from . import download_images

js = '''// pages/gorge/gorge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '暴食',
    show: '',
    recipe: {
      name: '食谱',
      display: false,
      content: %s
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.show + '.display'
    this.setData({
      id: true,
      show: this.data[options.show].name
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
'''


def recipe():
    url = 'https://dontstarve.fandom.com/zh/wiki/%s' % '暴食活動食譜'
    html = None

    def sleep_for_while():
        sleep(randint(1, 3))

    while 1:
        try:
            html = get(url, timeout=3.0).text
        except ReadTimeout:
            sleep_for_while()
            continue
        except ReadTimeoutError:
            sleep_for_while()
            continue
        except ConnectionError:
            sleep_for_while()
            continue
        break
    content = re.findall('<tr>(.*?)</tr>', html, re.S)
    content = [re.findall(u'<td>([0-9]*)</td>'  # #
                          u'<td>.*?data-image-key="(.*?)".*?data-src="(.*?)".*?</td>'  # 食物 key url
                          u'<td>(.*?)</td>'  # 名称
                          u'<td>(.*?)</td>'  # 满足要求
                          u'<td>.*?data-image-key="(.*?)".*?data-src="(.*?)".*?<br />(.*?)</td>'  # 炊具
                          u'<td>(.*?)</td>'  # 献祭奖励
                          u'<td>(.*?)</td>'  # 银餐具奖励
                          u'<td>(.*?)</td>'  # 配方
                          u'', s, re.S)[0] for s in content]
    for index, item in enumerate(content):
        item = list(item)
        item[4] = [re.sub(u"<.*?>", "", i) for i in item[4].split(',')]
        item[1] = [item[1], item[2]]
        item[5] = [[item[5], item[6]], item[7]]
        del item[7], item[6], item[2]
        item[4][1] = item[4][1].strip()
        second_item = item[4][1]
        if second_item.count('<br />') != 0:
            second_item = re.split('(^.*?)<br /><a .*?data-image-key="(.*?)".*?data-src="(.*?)".*?<br />(.*)$',
                                   second_item)
            second_item = [s for s in second_item if s != '']
            item[4] = [item[4][0], second_item[0], second_item[1:-1], second_item[-1]]
        item[5] = re.findall(u'([0-9]*?)&#215;.*?data-image-key="(.*?)".*?data-src="(.*?)"', item[5], re.S)
        item[5] = [list(tmp) for tmp in item[5]]
        item[6] = re.findall(u'([0-9]*?)&#215;.*?data-image-key="(.*?)".*?data-src="(.*?)"', item[6], re.S)
        item[6] = [list(tmp) for tmp in item[6]]
        item[7] = item[7].split('<br />')
        item[7] = [i.strip() for i in item[7]]
        item[7] = [re.split(u'<a .*?data-image-key="(.*?)".*?data-src="(.*?)".*?</a>', s)
                   for s in item[7]]
        item[7] = [[re.sub('<.*?>', '', re.sub('&#215;', '', i)) for i in s if i != ''] for s in item[7]]
        tmp_item_7 = []
        for tmp_index, tmp in enumerate(item[7]):
            i = 0
            tmp_item_7_line = []
            while i < len(tmp):
                if tmp[i].endswith('.png') and tmp[i + 1].startswith('https') and tmp[i + 2].isdigit():
                    one = [tmp[i], tmp[i + 1], tmp[i + 2]]
                    i += 3
                elif tmp[i].endswith('.png') and tmp[i + 1].startswith('https'):
                    one = [tmp[i], tmp[i + 1]]
                    i += 2
                else:
                    one = tmp[i]
                    i += 1
                tmp_item_7_line.append(one)
            tmp_item_7.append(tmp_item_7_line)
        item[7] = tmp_item_7
        content[index] = item
    tmp = {c[0]: c for c in content}
    content = list(tmp.values())
    content = sorted(content, key=lambda x: int(x[0]))
    return content


def download_recipe(recipe, wechat_path):
    images_dict = {}
    for index, item in enumerate(recipe):
        food = item[1]
        kitchen = item[4]
        reward = item[5]
        silver_reward = item[6]
        formula = item[7]
        images_dict[food[0]] = food[1]
        item[1] = '../../images/%s' % food[0]
        for idx, c in enumerate(kitchen):
            if not isinstance(c, str):
                images_dict[c[0]] = c[1]
                kitchen[idx][0] = '../../images/%s' % c[0]
                del kitchen[idx][1]
        tmp_kitchen = []
        _ = [tmp_kitchen.append({"kitchen_url": kitchen[idx][0], "kitchen_text": kitchen[idx + 1]}) for idx in
             range(0, len(kitchen), 2)]
        item[4] = tmp_kitchen
        for idx, one_gift in enumerate(reward):
            images_dict[one_gift[1]] = one_gift[2]
            reward[idx][1] = '../../images/%s' % one_gift[1]
            del reward[idx][2]
        tmp_reward = []
        _ = [tmp_reward.append({"quantity": int(rew[0]), "coin": rew[1]}) for rew in reward]
        item[5] = tmp_reward
        for idx, one_gift in enumerate(silver_reward):
            images_dict[one_gift[1]] = one_gift[2]
            silver_reward[idx][1] = '../../images/%s' % one_gift[1]
            del silver_reward[idx][2]
        tmp_silver_reward = []
        _ = [tmp_silver_reward.append({"quantity": int(rew[0]), "coin": rew[1]}) for rew in silver_reward]
        item[6] = tmp_silver_reward
        for line in formula:
            for idx, tmp in enumerate(line):
                if isinstance(tmp, str):
                    continue
                elif isinstance(tmp, list):
                    images_dict[tmp[0]] = tmp[1]
                    line[idx][0] = '../../images/%s' % tmp[0]
                    del line[idx][1]
                else:
                    raise ValueError(tmp)
        tmp_formula = []
        for line in formula:
            tmp_line = []
            for one in line:
                tmp_dict = {}
                if isinstance(one, list):
                    if len(one) == 2:
                        tmp_dict['formula_url'] = one[0]
                        tmp_dict['formula_quantity'] = one[1]
                    elif len(one) == 1:
                        tmp_dict['formula_url'] = one[0]
                    else:
                        raise ValueError
                    tmp_line.append({"kind": "formula", "content": tmp_dict})
                elif isinstance(one, str):
                    tmp_line.append({"kind": "text", 'content': one})
            tmp_formula.append(tmp_line)
        item[7] = tmp_formula
        recipe[index] = item
    download_images(images_dict, wechat_path)
    handled_recipe = []
    _ = [handled_recipe.append(
        {
            'id': item[0],
            'food_url': item[1],
            'name': item[2],
            'satisfy': item[3],
            'kitchen': item[4],
            'reward': item[5],
            'silver_reward': item[6],
            'formula': item[7]
        }
    ) for item in recipe]
    return handled_recipe
