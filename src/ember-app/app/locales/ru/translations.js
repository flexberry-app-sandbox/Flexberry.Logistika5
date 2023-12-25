import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISLogistika5БаржиLForm from './forms/i-i-s-logistika5-баржи-l';
import IISLogistika5ГрузLForm from './forms/i-i-s-logistika5-груз-l';
import IISLogistika5ДокумПоставLForm from './forms/i-i-s-logistika5-докум-постав-l';
import IISLogistika5ДокумРезультПLForm from './forms/i-i-s-logistika5-докум-результ-п-l';
import IISLogistika5ЗагрузКонтейнLForm from './forms/i-i-s-logistika5-загруз-контейн-l';
import IISLogistika5ЗагрузкаБаржиLForm from './forms/i-i-s-logistika5-загрузка-баржи-l';
import IISLogistika5КлиентыLForm from './forms/i-i-s-logistika5-клиенты-l';
import IISLogistika5КонтейнерыLForm from './forms/i-i-s-logistika5-контейнеры-l';
import IISLogistika5ОрганизацияLForm from './forms/i-i-s-logistika5-организация-l';
import IISLogistika5СотрудникиLForm from './forms/i-i-s-logistika5-сотрудники-l';
import IISLogistika5БаржиEForm from './forms/i-i-s-logistika5-баржи-e';
import IISLogistika5ГрузEForm from './forms/i-i-s-logistika5-груз-e';
import IISLogistika5ДокумПоставEForm from './forms/i-i-s-logistika5-докум-постав-e';
import IISLogistika5ДокумРезультПEForm from './forms/i-i-s-logistika5-докум-результ-п-e';
import IISLogistika5ЗагрузКонтейнEForm from './forms/i-i-s-logistika5-загруз-контейн-e';
import IISLogistika5ЗагрузкаБаржиEForm from './forms/i-i-s-logistika5-загрузка-баржи-e';
import IISLogistika5КлиентыEForm from './forms/i-i-s-logistika5-клиенты-e';
import IISLogistika5КонтейнерыEForm from './forms/i-i-s-logistika5-контейнеры-e';
import IISLogistika5ОрганизацияEForm from './forms/i-i-s-logistika5-организация-e';
import IISLogistika5СотрудникиEForm from './forms/i-i-s-logistika5-сотрудники-e';
import IISLogistika5БаржиModel from './models/i-i-s-logistika5-баржи';
import IISLogistika5ГрузModel from './models/i-i-s-logistika5-груз';
import IISLogistika5ДокумПоставModel from './models/i-i-s-logistika5-докум-постав';
import IISLogistika5ДокумРезультПModel from './models/i-i-s-logistika5-докум-результ-п';
import IISLogistika5ЗагрузКонтейнModel from './models/i-i-s-logistika5-загруз-контейн';
import IISLogistika5ЗагрузкаБаржиModel from './models/i-i-s-logistika5-загрузка-баржи';
import IISLogistika5КлиентыModel from './models/i-i-s-logistika5-клиенты';
import IISLogistika5КонтейнерыModel from './models/i-i-s-logistika5-контейнеры';
import IISLogistika5ОрганизацияModel from './models/i-i-s-logistika5-организация';
import IISLogistika5СотрудникиModel from './models/i-i-s-logistika5-сотрудники';
import IISLogistika5ТЧДостКонModel from './models/i-i-s-logistika5-т-ч-дост-кон';
import IISLogistika5ТЧИнфОГрузеModel from './models/i-i-s-logistika5-т-ч-инф-о-грузе';
import IISLogistika5ТЧИнфОЗакModel from './models/i-i-s-logistika5-т-ч-инф-о-зак';
import IISLogistika5ТЧИнфОКонтModel from './models/i-i-s-logistika5-т-ч-инф-о-конт';
import IISLogistika5ТЧРасписаниеModel from './models/i-i-s-logistika5-т-ч-расписание';
import IISLogistika5ТЧСвобМестModel from './models/i-i-s-logistika5-т-ч-своб-мест';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-logistika5-баржи': IISLogistika5БаржиModel,
    'i-i-s-logistika5-груз': IISLogistika5ГрузModel,
    'i-i-s-logistika5-докум-постав': IISLogistika5ДокумПоставModel,
    'i-i-s-logistika5-докум-результ-п': IISLogistika5ДокумРезультПModel,
    'i-i-s-logistika5-загруз-контейн': IISLogistika5ЗагрузКонтейнModel,
    'i-i-s-logistika5-загрузка-баржи': IISLogistika5ЗагрузкаБаржиModel,
    'i-i-s-logistika5-клиенты': IISLogistika5КлиентыModel,
    'i-i-s-logistika5-контейнеры': IISLogistika5КонтейнерыModel,
    'i-i-s-logistika5-организация': IISLogistika5ОрганизацияModel,
    'i-i-s-logistika5-сотрудники': IISLogistika5СотрудникиModel,
    'i-i-s-logistika5-т-ч-дост-кон': IISLogistika5ТЧДостКонModel,
    'i-i-s-logistika5-т-ч-инф-о-грузе': IISLogistika5ТЧИнфОГрузеModel,
    'i-i-s-logistika5-т-ч-инф-о-зак': IISLogistika5ТЧИнфОЗакModel,
    'i-i-s-logistika5-т-ч-инф-о-конт': IISLogistika5ТЧИнфОКонтModel,
    'i-i-s-logistika5-т-ч-расписание': IISLogistika5ТЧРасписаниеModel,
    'i-i-s-logistika5-т-ч-своб-мест': IISLogistika5ТЧСвобМестModel
  },

  'application-name': 'Логистика',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Логистика',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Логистика',
          title: 'Логистика'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        логистика: {
          caption: 'Логистика',
          title: 'Логистика',
          'i-i-s-logistika5-загруз-контейн-l': {
            caption: 'Загрузка контейнеров',
            title: ''
          },
          'i-i-s-logistika5-докум-постав-l': {
            caption: 'Документ поставки',
            title: ''
          },
          'i-i-s-logistika5-докум-результ-п-l': {
            caption: 'Документ результатов поставки',
            title: ''
          },
          'i-i-s-logistika5-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-logistika5-клиенты-l': {
            caption: 'Клиенты',
            title: ''
          },
          'i-i-s-logistika5-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-logistika5-баржи-l': {
            caption: 'Баржи',
            title: ''
          },
          'i-i-s-logistika5-загрузка-баржи-l': {
            caption: 'Загрузка баржи',
            title: ''
          },
          'i-i-s-logistika5-контейнеры-l': {
            caption: 'Контейнеры',
            title: ''
          },
          'i-i-s-logistika5-груз-l': {
            caption: 'Груз',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-logistika5-баржи-l': IISLogistika5БаржиLForm,
    'i-i-s-logistika5-груз-l': IISLogistika5ГрузLForm,
    'i-i-s-logistika5-докум-постав-l': IISLogistika5ДокумПоставLForm,
    'i-i-s-logistika5-докум-результ-п-l': IISLogistika5ДокумРезультПLForm,
    'i-i-s-logistika5-загруз-контейн-l': IISLogistika5ЗагрузКонтейнLForm,
    'i-i-s-logistika5-загрузка-баржи-l': IISLogistika5ЗагрузкаБаржиLForm,
    'i-i-s-logistika5-клиенты-l': IISLogistika5КлиентыLForm,
    'i-i-s-logistika5-контейнеры-l': IISLogistika5КонтейнерыLForm,
    'i-i-s-logistika5-организация-l': IISLogistika5ОрганизацияLForm,
    'i-i-s-logistika5-сотрудники-l': IISLogistika5СотрудникиLForm,
    'i-i-s-logistika5-баржи-e': IISLogistika5БаржиEForm,
    'i-i-s-logistika5-груз-e': IISLogistika5ГрузEForm,
    'i-i-s-logistika5-докум-постав-e': IISLogistika5ДокумПоставEForm,
    'i-i-s-logistika5-докум-результ-п-e': IISLogistika5ДокумРезультПEForm,
    'i-i-s-logistika5-загруз-контейн-e': IISLogistika5ЗагрузКонтейнEForm,
    'i-i-s-logistika5-загрузка-баржи-e': IISLogistika5ЗагрузкаБаржиEForm,
    'i-i-s-logistika5-клиенты-e': IISLogistika5КлиентыEForm,
    'i-i-s-logistika5-контейнеры-e': IISLogistika5КонтейнерыEForm,
    'i-i-s-logistika5-организация-e': IISLogistika5ОрганизацияEForm,
    'i-i-s-logistika5-сотрудники-e': IISLogistika5СотрудникиEForm
  },

});

export default translations;
