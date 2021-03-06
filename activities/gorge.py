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
    istrue: false,
    title: '暴食',
    show: '',
    recipe: {
      name: '食谱',
      display: false,
      content: %s,
      satisfyMap: %s,
      index: 0
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
  bindPickerChange: function (e) {
    this.setData({
        'recipe.index': e.detail.value
    })
    let tapId = e.detail.value
    let satisfyMap = this.data.recipe.satisfyMap
    for (let i = 0, len = satisfyMap.length; i < len; ++i) {
      satisfyMap[i]['show'] = false
    }
    satisfyMap[tapId]['show'] = true
    this.setData({
      'recipe.satisfyMap': satisfyMap
    })
  },
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
            one_gift[1] = re.sub("%", '', one_gift[1])
            images_dict[one_gift[1]] = one_gift[2]
            reward[idx][1] = '../../images/%s' % one_gift[1]
            del reward[idx][2]
        tmp_reward = []
        _ = [tmp_reward.append({"quantity": int(rew[0]), "coin": rew[1]}) for rew in reward]
        item[5] = tmp_reward
        for idx, one_gift in enumerate(silver_reward):
            one_gift[1] = re.sub("%", '', one_gift[1])
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


def satisfy_map(handled_recipe):
    recipe_satisfy_map = {}
    keys = []
    for recipe in handled_recipe:
        keys += recipe["satisfy"]
    keys = list(set(keys))
    keys.insert(0, '全部')
    for key in keys:
        recipe_satisfy_map[key] = []
    recipe_satisfy_map['全部'] = [i for i in range(len(handled_recipe))]
    for index, recipe in enumerate(handled_recipe):
        for satis in recipe["satisfy"]:
            recipe_satisfy_map[satis].append(index)
    result = [{'satisfy': key, 'ids': recipe_satisfy_map[key], 'show': 'false'} for key in recipe_satisfy_map]
    result[0]['show'] = 'true'
    return result


translation_dict = {
    'recipe': {
        'name': {
            'Loaf of Bread': '条状面包',
            'Potato Chips': '薯片',
            'Vegetable Soup': '蔬菜汤',
            'Jelly Sandwich': '果冻三明治',
            'Fish Stew': '炖鱼',
            'Turnip Cake': '萝卜蛋糕',
            'Potato Pancakes': '土豆煎饼',
            'Potato Soup': '土豆汤',
            'Fishball Skewers': '鱼丸串',
            'Meatballs': '肉丸',
            'Meat Skewers': '肉串',
            'Stone Soup': '石头汤',
            'Croquette': '炸丸子',
            'Roast Vegetables': '烤蔬菜',
            'Meatloaf': '肉饼',
            'Carrot Soup': '胡萝卜汤',
            'Fish Pie': '鲜鱼派',
            'Fish and Chips': '炸鱼薯条',
            'Meat Pie': '肉派',
            'Sliders': '小汉堡',
            'Fist Full of Jam': '满满的果酱',
            'Jelly Roll': '果冻卷',
            'Carrot Cake': '胡萝卜蛋糕',
            'Garlic Mashed Potatoes': '蒜香土豆泥',
            'Garlic Bread': '蒜香面包',
            'Tomato Soup': '番茄汤',
            'Sausage': '肉肠',
            'Candied Fish': '糖煮鱼',
            'Stuffed Mushroom': '蘑菇馅饼',
            'Ratatouille': '蔬菜杂烩',
            'Bruschetta': '意大利烤面包片',
            'Meat Stew': '肉汤',
            'Hamburger': '汉堡',
            'Fish Burger': '鱼汉堡',
            'Mushroom Burger': '蘑菇汉堡',
            'Fish Steak': '鱼排',
            'Curry': '咖喱',
            'Spaghetti and Meatball': '肉丸意大利面',
            'Lasagna': '千层面',
            'Poached Fish': '水煮鱼',
            'Shepherds Pie': '牧羊人的馅饼',
            'Candy': '拐棍糖',
            'Bread Pudding': '布丁',
            'Waffles': '华夫饼',
            'Berry Tart': '浆果馅饼',
            'Macaroni and Cheese': '芝士通心粉',
            'Bagel and Fish': '硬面包圈夹鱼',
            'Grilled Cheese': '烤奶酪',
            'Cream of Mushroom': '奶油蘑菇汤',
            'Pierogies': '饺子形馅饼',
            'Manicotti': '番茄沙司烙通心粉',
            'Cheeseburger': '芝士汉堡',
            'Creamy Fettuccine': '奶油意大利宽面',
            'Onion Soup': '洋葱汤',
            'Breaded Cutlet': '面包屑炸鱼排',
            'Creamy Fish': '奶油烤鱼',
            'Pizza': '披萨',
            'Pot Roast': '炖肉',
            'Crab Cake': '蟹肉蛋糕',
            'Steak Frites': '牛排薯条',
            'Shooter Sandwich': '射击三明治',
            'Bacon Wrapped Meat': '培根裹肉',
            'Crab Roll': '蟹肉卷',
            'Meat Wellington': '威灵顿肉排',
            'Crab Ravioli': '意式蟹肉云吞',
            'Caramel Cube': '方形焦糖',
            'Scone': '司康',
            'Trifle': '松糕',
            '芝士蛋糕': '芝士蛋糕',
            'Syrup': '糖浆'
        },
        'satisfy': {
            '全部': '全部',
            '汤': '汤类',
            '意面': '意面',
            'None': '其他',
            '甜点': '甜点',
            'Meat': '肉类',
            '面包': '面包',
            '奶酪': '奶酪',
            '蔬菜': '素食',
            'Fish': '鱼类',
            '零食': '零食'
        },
        'formula': {
            'or': '或',
            'a': '一个',
            'different': '不同的',
            'vegetable': '蔬菜',
            'except': '除了',
            'no': '没有',
            'duplicates': '重复',
            'duplicate': '重复',
            'of': '',
            'previous': '前面的',
            'ingredient': '素材'
        }
    }
}
kinds = ['recipe']


def translate(gorge_data, kind):
    assert kind in kinds
    if kind == 'recipe':
        formula_keys = list(translation_dict[kind]['formula'].keys())
        for index, item in enumerate(gorge_data):
            item['name'] = translation_dict[kind]['name'][item['name']]
            item['satisfy'] = [translation_dict[kind]['satisfy'][sa] for sa in item['satisfy']]

            formula = item['formula']
            for idx, line in enumerate(formula):
                for x, one in enumerate(line):
                    if one['kind'] == 'text':
                        text = one['content']
                        text = re.split(u'(\(|\))|\s', text)
                        text = [t for t in text if t not in [None, '']]
                        text = ''.join([translation_dict[kind]['formula'][t] if t in formula_keys else t for t in text])
                        line[x]['content'] = text
                formula[idx] = line
    return gorge_data
