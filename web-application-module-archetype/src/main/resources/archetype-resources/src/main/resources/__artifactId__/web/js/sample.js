/*
 * #%L
 * Web Archetype Module for DWM
 * %%
 * Copyright (C) 2013 Abada Servicios Desarrollo (investigacion@abadasoft.com)
 * %%
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as
 * published by the Free Software Foundation, either version 3 of the 
 * License, or (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public 
 * License along with this program.  If not, see
 * <http://www.gnu.org/licenses/gpl-3.0.html>.
 * #L%
 */
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.require(['Ext.window.Window']);



Ext.onReady(function() {
    var i18n = Ext.create('Abada.i18n.Bundle', {
        path: getRelativeURI('${artifactId.replace('.','/')}/locale'),
        bundle: 'messages',
        insertLocale: false
    });

    i18n.on('error', function() {
        i18n.language = i18n.defaultLanguage;
        i18n.load();
    });

    i18n.on('loaded', function() {
        var startPanel = Ext.create('Abada.form.field.Date', {});
        var endPanel = Ext.create('Abada.form.field.Date', {});
        var cbOncoguide = Ext.create('Abada.form.field.ComboBox', {
            url: getRelativeServerURI('sampleurl')
        });

        var panel = Ext.create('Ext.panel.Panel', {
            title: 'Estadisticas',
            height: App.height,
            items: [
                cbOncoguide, startPanel, endPanel
            ]
        });

        setCentralPanel(panel);
    });
    i18n.load();
});
