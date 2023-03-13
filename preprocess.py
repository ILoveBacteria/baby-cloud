# This python code will pre-compile the JavaScript files including JSX format
# Then uses webpack to create a bundle file
# ez pz
import os


def pre_compile():
    os.system('npx babel drive/static/drive/javascript --out-dir drive/static/drive/compiled --presets '
              'react-app/prod')


def bundle():
    os.system('npx webpack')


if __name__ == '__main__':
    print('Start pre compiling JavaScript files')
    pre_compile()
    print('Start bundling the app')
    bundle()
    print('Done')
