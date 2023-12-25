export default {
  projections: {
    ДокумРезультПE: {
      дата: {
        __caption__: 'Дата документа результатов поставки'
      },
      датаПриб: {
        __caption__: 'Дата прибытия'
      },
      докумПостав: {
        __caption__: 'Номер документа поставки',
        номДокПостав: {
          __caption__: 'Номер документа поставки'
        },
        клиенты: {
          __caption__: '',
          заказчик: {
            __caption__: 'Наименование заказчика'
          },
          адресПоставки: {
            __caption__: 'Адрес поставки'
          }
        }
      },
      тЧДостКонт: {
        __caption__: 'Доставленные контейнеры',
        груз: {
          __caption__: 'Код груза',
          кодГруза: {
            __caption__: 'Код груза'
          },
          категорияГр: {
            __caption__: 'Категория поставленного груза '
          },
          объем: {
            __caption__: 'Объем поставленного груза'
          }
        }
      },
      тЧСвобМест: {
        __caption__: 'Свободное место в контейнерах',
        загрузКонтейн: {
          __caption__: 'Номер документа загрузки контейнеров',
          номерДокЗагк: {
            __caption__: 'Номер документа загрузки контейнеров'
          },
          контейнеры: {
            __caption__: '',
            номерКонтей: {
              __caption__: 'Номер контейнера'
            },
            объем: {
              __caption__: 'Объем контейнера'
            }
          }
        },
        свобОбъем: {
          __caption__: 'Освободившийся объем'
        }
      }
    },
    ДокумРезультПL: {
      дата: {
        __caption__: 'Дата документа результатов поставки'
      },
      датаПриб: {
        __caption__: 'Дата прибытия'
      },
      докумПостав: {
        __caption__: 'Номер документа поставки',
        номДокПостав: {
          __caption__: 'Номер документа поставки'
        },
        клиенты: {
          __caption__: '',
          заказчик: {
            __caption__: 'Наименование заказчика'
          },
          адресПоставки: {
            __caption__: 'Адрес поставки'
          }
        }
      }
    }
  },
  validations: {
    дата: {
      __caption__: 'Дата документа результатов поставки'
    },
    датаПриб: {
      __caption__: 'Дата прибытия'
    },
    докумПостав: {
      __caption__: 'Номер документа поставки'
    },
    тЧДостКонт: {
      __caption__: 'Доставленные контейнеры'
    },
    тЧСвобМест: {
      __caption__: 'Свободное место в контейнерах'
    }
  }
};
