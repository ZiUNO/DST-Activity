import os
import pathlib

import requests
from tqdm import tqdm


def download_images(image_dict, wechat_path):
    image_download_path = os.path.join(wechat_path, 'images', '%s')
    for image in tqdm(image_dict, desc="DOWNLOAD IMAGES"):
        image_save_path = image_download_path % image
        image_url = image_dict[image]
        image_content = None
        if pathlib.Path(image_save_path).exists():
            continue
        while 1:
            try:
                image_content = requests.get(image_url, timeout=10.0).content
            except requests.exceptions.ConnectionError:
                continue
            break
        with open(image_save_path, 'wb') as f:
            f.write(image_content)
