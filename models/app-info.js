'use strict';

import appInfo from "./app-info.json" assert { type: "json" };

export const appInfoStore = {
  getAppInfo() {
    return appInfo;
  },
};
