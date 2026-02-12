'use strict';

import logger from "../utils/logger.js";
import { appInfoStore } from "../models/app-info.js";

const about = {
  createView(request, response) {
    logger.info("About page loading!");

    const appInfo = appInfoStore.getAppInfo();

    response.render("about", {
      title: "About",
      employee: appInfo.employee,
    });
  },
};

export default about;
