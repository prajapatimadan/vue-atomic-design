
import DefaultTemplate from '../components/templates/DefaultTemplate.vue';
import LeftTemplate from '../components/templates/LeftTemplate.vue';
import RightTemplate from '../components/templates/RightTemplate.vue';

export default function (Vue) {
    const templates = {
        'DefaultTemplate': DefaultTemplate,
        'LeftTemplate': LeftTemplate,
        'RightTemplate': RightTemplate
    }
    for (const path in templates) {
        const templateName = path.replace('../templates/', '').replace('/index.vue', '').replace('.vue', '');
        Vue.component(`${templateName}-template`, templates[path]);
      }
}