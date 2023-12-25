import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  груз: DS.belongsTo('i-i-s-logistika5-груз', { inverse: null, async: false }),
  загрузКонтейн: DS.belongsTo('i-i-s-logistika5-загруз-контейн', { inverse: null, async: false }),
  докумРезультП: DS.belongsTo('i-i-s-logistika5-докум-результ-п', { inverse: 'тЧДостКонт', async: false })
});

export let ValidationRules = {
  груз: {
    descriptionKey: 'models.i-i-s-logistika5-т-ч-дост-кон.validations.груз.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  загрузКонтейн: {
    descriptionKey: 'models.i-i-s-logistika5-т-ч-дост-кон.validations.загрузКонтейн.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  докумРезультП: {
    descriptionKey: 'models.i-i-s-logistika5-т-ч-дост-кон.validations.докумРезультП.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧДостКонE', 'i-i-s-logistika5-т-ч-дост-кон', {
    груз: belongsTo('i-i-s-logistika5-груз', 'Код груза', {
      кодГруза: attr('Код груза', { index: 1, hidden: true }),
      категорияГр: attr('Категория поставленного груза ', { index: 2 }),
      объем: attr('Объем поставленного груза', { index: 3 })
    }, { index: 0, displayMemberPath: 'кодГруза' })
  });
};
