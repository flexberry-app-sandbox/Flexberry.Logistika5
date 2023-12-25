import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-logistika5-сотрудники', 'Unit | Serializer | i-i-s-logistika5-сотрудники', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-logistika5-сотрудники',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-logistika5-баржи',
    'model:i-i-s-logistika5-груз',
    'model:i-i-s-logistika5-докум-постав',
    'model:i-i-s-logistika5-докум-результ-п',
    'model:i-i-s-logistika5-загруз-контейн',
    'model:i-i-s-logistika5-загрузка-баржи',
    'model:i-i-s-logistika5-клиенты',
    'model:i-i-s-logistika5-контейнеры',
    'model:i-i-s-logistika5-организация',
    'model:i-i-s-logistika5-сотрудники',
    'model:i-i-s-logistika5-т-ч-дост-кон',
    'model:i-i-s-logistika5-т-ч-инф-о-грузе',
    'model:i-i-s-logistika5-т-ч-инф-о-зак',
    'model:i-i-s-logistika5-т-ч-инф-о-конт',
    'model:i-i-s-logistika5-т-ч-расписание',
    'model:i-i-s-logistika5-т-ч-своб-мест',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
