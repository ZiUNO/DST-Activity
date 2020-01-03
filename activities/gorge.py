# coding=utf-8
import re
from random import randint
from time import sleep

from requests import get, ReadTimeout
from urllib3.exceptions import ReadTimeoutError

js = '''
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
      content: []
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
    content = [re.findall(u'<td>.*?data-image-key="(.*?)".*?data-src="(.*?)".*?</td>'  # 食物 key url
                          u'<td>(.*?)</td>'  # 名称
                          u'<td>(.*?)</td>'  # 满足要求
                          u'<td>.*?data-image-key="(.*?)".*?data-src="(.*?)".*?<br />(.*?)</td>'  # 炊具
                          u'<td>(.*?)</td>'  # 献祭奖励
                          u'<td>(.*?)</td>'  # 银餐具奖励
                          u'<td>(.*?)</td>'  # 配方
                          u'', s, re.S)[0] for s in content]
    for index, item in enumerate(content):
        item = list(item)
        item[3] = [re.sub(u"<.*?>", "", i) for i in item[3].split(',')]
        item[0] = [item[0], item[1]]
        item[4] = [[item[4], item[5]], item[6]]
        del item[6], item[5], item[1]
        item[3][1] = item[3][1].strip()
        item[4] = re.findall(u'([0-9]*?)&#215;.*?data-image-key="(.*?)".*?data-src="(.*?)"', item[4], re.S)
        item[4] = [list(tmp) for tmp in item[4]]
        item[5] = re.findall(u'([0-9]*?)&#215;.*?data-image-key="(.*?)".*?data-src="(.*?)"', item[5], re.S)
        item[5] = [list(tmp) for tmp in item[5]]
        item[6] = item[6].split('<br />')
        item[6] = [i.strip() for i in item[6]]
        item[6] = [re.split(u'<a .*?data-image-key="(.*?)".*?data-src="(.*?)".*?</a>', s)
                   for s in item[6]]
        item[6] = [[re.sub('<.*?>', '', re.sub('&#215;', '', i)) for i in s if i != ''] for s in item[6]]
        tmp_item_6 = []
        for tmp_index, tmp in enumerate(item[6]):
            i = 0
            tmp_item_6_line = []
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
                tmp_item_6_line.append(one)
            tmp_item_6.append(tmp_item_6_line)
        item[6] = tmp_item_6
        content[index] = item
    for i, item in enumerate(content):
        print(i, item)


if __name__ == '__main__':
    recipe()
