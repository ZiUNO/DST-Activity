import json
import os
import re

from activities.gorge import recipe, download_recipe, js, satisfy_map

if __name__ == '__main__':
    wechat_path = os.path.join('wechat')
    raw_recipe_content = recipe()
    recipe_content = download_recipe(raw_recipe_content, wechat_path=wechat_path)
    gorge_js_path = os.path.join('wechat', 'pages', 'gorge', 'gorge.js')
    satisfy_map = satisfy_map(recipe_content)
    pattern = r"'([a-z\_]*?)':"
    gorge_js = js % (re.sub(pattern, r"\1:", str(recipe_content)),
                     re.sub(r"'(true)'|'(false)'", r'\1\2', re.sub(pattern, r"\1:", str(satisfy_map))))
    with open(gorge_js_path, 'w', encoding='utf-8') as f:
        f.write(gorge_js)
