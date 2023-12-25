import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.логистика.caption'),
          title: i18n.t('forms.application.sitemap.логистика.title'),
          children: [{
            link: 'i-i-s-logistika5-загруз-контейн-l',
            caption: i18n.t('forms.application.sitemap.логистика.i-i-s-logistika5-загруз-контейн-l.caption'),
            title: i18n.t('forms.application.sitemap.логистика.i-i-s-logistika5-загруз-контейн-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-logistika5-докум-постав-l',
            caption: i18n.t('forms.application.sitemap.логистика.i-i-s-logistika5-докум-постав-l.caption'),
            title: i18n.t('forms.application.sitemap.логистика.i-i-s-logistika5-докум-постав-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-logistika5-докум-результ-п-l',
            caption: i18n.t('forms.application.sitemap.логистика.i-i-s-logistika5-докум-результ-п-l.caption'),
            title: i18n.t('forms.application.sitemap.логистика.i-i-s-logistika5-докум-результ-п-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-logistika5-организация-l',
            caption: i18n.t('forms.application.sitemap.логистика.i-i-s-logistika5-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.логистика.i-i-s-logistika5-организация-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-logistika5-клиенты-l',
            caption: i18n.t('forms.application.sitemap.логистика.i-i-s-logistika5-клиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.логистика.i-i-s-logistika5-клиенты-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-logistika5-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.логистика.i-i-s-logistika5-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.логистика.i-i-s-logistika5-сотрудники-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-logistika5-баржи-l',
            caption: i18n.t('forms.application.sitemap.логистика.i-i-s-logistika5-баржи-l.caption'),
            title: i18n.t('forms.application.sitemap.логистика.i-i-s-logistika5-баржи-l.title'),
            children: null
          }, {
            link: 'i-i-s-logistika5-загрузка-баржи-l',
            caption: i18n.t('forms.application.sitemap.логистика.i-i-s-logistika5-загрузка-баржи-l.caption'),
            title: i18n.t('forms.application.sitemap.логистика.i-i-s-logistika5-загрузка-баржи-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-logistika5-контейнеры-l',
            caption: i18n.t('forms.application.sitemap.логистика.i-i-s-logistika5-контейнеры-l.caption'),
            title: i18n.t('forms.application.sitemap.логистика.i-i-s-logistika5-контейнеры-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-logistika5-груз-l',
            caption: i18n.t('forms.application.sitemap.логистика.i-i-s-logistika5-груз-l.caption'),
            title: i18n.t('forms.application.sitemap.логистика.i-i-s-logistika5-груз-l.title'),
            icon: 'building',
            children: null
          }]
        }
      ]
    };
  }),
})