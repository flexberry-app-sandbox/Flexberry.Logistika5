﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Logistika5
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Т ч своб мест.
    /// </summary>
    // *** Start programmer edit section *** (ТЧСвобМест CustomAttributes)

    // *** End programmer edit section *** (ТЧСвобМест CustomAttributes)
    [AutoAltered()]
    [Caption("Свободное место")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТЧСвобМестE", new string[] {
            "ЗагрузКонтейн as \'Номер документа загрузки контейнеров\'",
            "ЗагрузКонтейн.НомерДокЗагк as \'Номер документа загрузки контейнеров\'",
            "ЗагрузКонтейн.Контейнеры.НомерКонтей as \'Номер контейнера\'",
            "ЗагрузКонтейн.Контейнеры.Объем as \'Объем контейнера\'",
            "СвобОбъем as \'Освободившийся объем\'"}, Hidden=new string[] {
            "ЗагрузКонтейн.НомерДокЗагк"})]
    [MasterViewDefineAttribute("ТЧСвобМестE", "ЗагрузКонтейн", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "НомерДокЗагк")]
    public class ТЧСвобМест : ICSSoft.STORMNET.DataObject
    {
        
        private double fСвобОбъем;
        
        private IIS.Logistika5.ЗагрузКонтейн fЗагрузКонтейн;
        
        private IIS.Logistika5.ДокумРезультП fДокумРезультП;
        
        // *** Start programmer edit section *** (ТЧСвобМест CustomMembers)

        // *** End programmer edit section *** (ТЧСвобМест CustomMembers)

        
        /// <summary>
        /// СвобОбъем.
        /// </summary>
        // *** Start programmer edit section *** (ТЧСвобМест.СвобОбъем CustomAttributes)

        // *** End programmer edit section *** (ТЧСвобМест.СвобОбъем CustomAttributes)
        public virtual double СвобОбъем
        {
            get
            {
                // *** Start programmer edit section *** (ТЧСвобМест.СвобОбъем Get start)

                // *** End programmer edit section *** (ТЧСвобМест.СвобОбъем Get start)
                double result = this.fСвобОбъем;
                // *** Start programmer edit section *** (ТЧСвобМест.СвобОбъем Get end)

                // *** End programmer edit section *** (ТЧСвобМест.СвобОбъем Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧСвобМест.СвобОбъем Set start)

                // *** End programmer edit section *** (ТЧСвобМест.СвобОбъем Set start)
                this.fСвобОбъем = value;
                // *** Start programmer edit section *** (ТЧСвобМест.СвобОбъем Set end)

                // *** End programmer edit section *** (ТЧСвобМест.СвобОбъем Set end)
            }
        }
        
        /// <summary>
        /// Т ч своб мест.
        /// </summary>
        // *** Start programmer edit section *** (ТЧСвобМест.ЗагрузКонтейн CustomAttributes)

        // *** End programmer edit section *** (ТЧСвобМест.ЗагрузКонтейн CustomAttributes)
        [PropertyStorage(new string[] {
                "ЗагрузКонтейн"})]
        [NotNull()]
        public virtual IIS.Logistika5.ЗагрузКонтейн ЗагрузКонтейн
        {
            get
            {
                // *** Start programmer edit section *** (ТЧСвобМест.ЗагрузКонтейн Get start)

                // *** End programmer edit section *** (ТЧСвобМест.ЗагрузКонтейн Get start)
                IIS.Logistika5.ЗагрузКонтейн result = this.fЗагрузКонтейн;
                // *** Start programmer edit section *** (ТЧСвобМест.ЗагрузКонтейн Get end)

                // *** End programmer edit section *** (ТЧСвобМест.ЗагрузКонтейн Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧСвобМест.ЗагрузКонтейн Set start)

                // *** End programmer edit section *** (ТЧСвобМест.ЗагрузКонтейн Set start)
                this.fЗагрузКонтейн = value;
                // *** Start programmer edit section *** (ТЧСвобМест.ЗагрузКонтейн Set end)

                // *** End programmer edit section *** (ТЧСвобМест.ЗагрузКонтейн Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Logistika5.ДокумРезультП.
        /// </summary>
        // *** Start programmer edit section *** (ТЧСвобМест.ДокумРезультП CustomAttributes)

        // *** End programmer edit section *** (ТЧСвобМест.ДокумРезультП CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "ДокумРезультП"})]
        public virtual IIS.Logistika5.ДокумРезультП ДокумРезультП
        {
            get
            {
                // *** Start programmer edit section *** (ТЧСвобМест.ДокумРезультП Get start)

                // *** End programmer edit section *** (ТЧСвобМест.ДокумРезультП Get start)
                IIS.Logistika5.ДокумРезультП result = this.fДокумРезультП;
                // *** Start programmer edit section *** (ТЧСвобМест.ДокумРезультП Get end)

                // *** End programmer edit section *** (ТЧСвобМест.ДокумРезультП Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧСвобМест.ДокумРезультП Set start)

                // *** End programmer edit section *** (ТЧСвобМест.ДокумРезультП Set start)
                this.fДокумРезультП = value;
                // *** Start programmer edit section *** (ТЧСвобМест.ДокумРезультП Set end)

                // *** End programmer edit section *** (ТЧСвобМест.ДокумРезультП Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТЧСвобМестE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТЧСвобМестE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТЧСвобМестE", typeof(IIS.Logistika5.ТЧСвобМест));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ТЧСвобМест.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfТЧСвобМест CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfТЧСвобМест CustomAttributes)
    public class DetailArrayOfТЧСвобМест : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Logistika5.DetailArrayOfТЧСвобМест members)

        // *** End programmer edit section *** (IIS.Logistika5.DetailArrayOfТЧСвобМест members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ТЧСвобМест by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ТЧСвобМест.
        /// </summary>
        public DetailArrayOfТЧСвобМест(IIS.Logistika5.ДокумРезультП fДокумРезультП) : 
                base(typeof(ТЧСвобМест), ((ICSSoft.STORMNET.DataObject)(fДокумРезультП)))
        {
        }
        
        public IIS.Logistika5.ТЧСвобМест this[int index]
        {
            get
            {
                return ((IIS.Logistika5.ТЧСвобМест)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Logistika5.ТЧСвобМест dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
