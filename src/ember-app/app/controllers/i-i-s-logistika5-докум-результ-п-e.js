import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-logistika5-докум-результ-п-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-logistika5-т-ч-дост-кон+груз':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'кодГруза',
            required: true,
            relationName: 'груз',
            projection: 'ГрузL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-logistika5-т-ч-своб-мест+загрузКонтейн':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'номерДокЗагк',
            required: true,
            relationName: 'загрузКонтейн',
            projection: 'ЗагрузКонтейнL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
