import os
import re

from activities.gorge import recipe, download_recipe, js, satisfy_map, translate

if __name__ == '__main__':
    wechat_path = os.path.join('wechat')
    raw_recipe_content = recipe()
    recipe_content = download_recipe(raw_recipe_content, wechat_path=wechat_path)
    gorge_js_path = os.path.join('wechat', 'pages', 'gorge', 'gorge.js')
    recipe_content = translate(recipe_content, kind='recipe')
    satisfy_map = satisfy_map(recipe_content)
    pattern = r"'([a-z\_]*?)':"
    recipe_content_str = str(recipe_content)
    satisfy_map_str = str(satisfy_map)

    gorge_js = js % (re.sub(pattern, r"\1:", recipe_content_str),
                     re.sub(r"'(true)'|'(false)'", r'\1\2', re.sub(pattern, r"\1:", satisfy_map_str)))
    with open(gorge_js_path, 'w', encoding='utf-8') as f:
        f.write(gorge_js)
