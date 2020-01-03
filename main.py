import os

from activities.gorge import recipe, download_recipe

if __name__ == '__main__':
    wechat_path = os.path.join('wechat')
    raw_recipe_content = recipe()
    # print(raw_recipe_content)
    recipe_content = download_recipe(raw_recipe_content, wechat_path=wechat_path)
    for i, item in enumerate(recipe_content):
        print(i, item)
