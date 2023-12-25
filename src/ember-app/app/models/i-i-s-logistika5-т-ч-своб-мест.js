import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧСвобМестMixin
} from '../mixins/regenerated/models/i-i-s-logistika5-т-ч-своб-мест';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧСвобМестMixin, Validations, {
});

defineProjections(Model);

export default Model;
