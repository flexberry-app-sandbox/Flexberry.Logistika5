import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-logistika5-баржи-l');
  this.route('i-i-s-logistika5-баржи-e',
  { path: 'i-i-s-logistika5-баржи-e/:id' });
  this.route('i-i-s-logistika5-баржи-e.new',
  { path: 'i-i-s-logistika5-баржи-e/new' });
  this.route('i-i-s-logistika5-груз-l');
  this.route('i-i-s-logistika5-груз-e',
  { path: 'i-i-s-logistika5-груз-e/:id' });
  this.route('i-i-s-logistika5-груз-e.new',
  { path: 'i-i-s-logistika5-груз-e/new' });
  this.route('i-i-s-logistika5-докум-постав-l');
  this.route('i-i-s-logistika5-докум-постав-e',
  { path: 'i-i-s-logistika5-докум-постав-e/:id' });
  this.route('i-i-s-logistika5-докум-постав-e.new',
  { path: 'i-i-s-logistika5-докум-постав-e/new' });
  this.route('i-i-s-logistika5-докум-результ-п-l');
  this.route('i-i-s-logistika5-докум-результ-п-e',
  { path: 'i-i-s-logistika5-докум-результ-п-e/:id' });
  this.route('i-i-s-logistika5-докум-результ-п-e.new',
  { path: 'i-i-s-logistika5-докум-результ-п-e/new' });
  this.route('i-i-s-logistika5-загруз-контейн-l');
  this.route('i-i-s-logistika5-загруз-контейн-e',
  { path: 'i-i-s-logistika5-загруз-контейн-e/:id' });
  this.route('i-i-s-logistika5-загруз-контейн-e.new',
  { path: 'i-i-s-logistika5-загруз-контейн-e/new' });
  this.route('i-i-s-logistika5-загрузка-баржи-l');
  this.route('i-i-s-logistika5-загрузка-баржи-e',
  { path: 'i-i-s-logistika5-загрузка-баржи-e/:id' });
  this.route('i-i-s-logistika5-загрузка-баржи-e.new',
  { path: 'i-i-s-logistika5-загрузка-баржи-e/new' });
  this.route('i-i-s-logistika5-клиенты-l');
  this.route('i-i-s-logistika5-клиенты-e',
  { path: 'i-i-s-logistika5-клиенты-e/:id' });
  this.route('i-i-s-logistika5-клиенты-e.new',
  { path: 'i-i-s-logistika5-клиенты-e/new' });
  this.route('i-i-s-logistika5-контейнеры-l');
  this.route('i-i-s-logistika5-контейнеры-e',
  { path: 'i-i-s-logistika5-контейнеры-e/:id' });
  this.route('i-i-s-logistika5-контейнеры-e.new',
  { path: 'i-i-s-logistika5-контейнеры-e/new' });
  this.route('i-i-s-logistika5-организация-l');
  this.route('i-i-s-logistika5-организация-e',
  { path: 'i-i-s-logistika5-организация-e/:id' });
  this.route('i-i-s-logistika5-организация-e.new',
  { path: 'i-i-s-logistika5-организация-e/new' });
  this.route('i-i-s-logistika5-сотрудники-l');
  this.route('i-i-s-logistika5-сотрудники-e',
  { path: 'i-i-s-logistika5-сотрудники-e/:id' });
  this.route('i-i-s-logistika5-сотрудники-e.new',
  { path: 'i-i-s-logistika5-сотрудники-e/new' });
});

export default Router;
