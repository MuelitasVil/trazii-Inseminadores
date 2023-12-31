import { I18n } from "i18n-js";

import es from './es';
import en from './en';

const i18n = new I18n({ es, en });
i18n.enableFallback = true
i18n.locale = "es";

export default i18n;