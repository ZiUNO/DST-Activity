import json
import os
import re

from activities.gorge import recipe, download_recipe, js

if __name__ == '__main__':
    wechat_path = os.path.join('wechat')
    raw_recipe_content = recipe()
    recipe_content = download_recipe(raw_recipe_content, wechat_path=wechat_path)
    gorge_js_path = os.path.join('wechat', 'pages', 'gorge', 'gorge.js')
    print(str(recipe_content))
    gorge_js = js % re.sub(r"'([a-z\_]*?)':", r"\1:", str(recipe_content))
    with open(gorge_js_path, 'w', encoding='utf-8') as f:
        f.write(gorge_js)
