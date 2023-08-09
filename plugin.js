import {type as IApi ,api } from 'umi';
 
export default () => {
  api.describe({
    key: 'changeFavicon',
    config: {
      schema(joi) {
        return joi.string();
      },
    },
    enableBy: api.EnableBy.config
  });
  api.modifyConfig((memo)=>{
    memo.favicons = api.userConfig.changeFavicon;
    return memo;
  });
};