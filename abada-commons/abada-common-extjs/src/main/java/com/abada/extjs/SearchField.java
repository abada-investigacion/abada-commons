/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package com.abada.extjs;

/*
 * #%L
 * Abada Commons
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

import com.abada.ofuscation.annotation.NoOfuscation;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * usado para parsear un array de valores que vengan en Json del tipo
 * [{key:"",value:""},{key:"",value:""}].<br/>
 * Usado para las llamadas Ajax
 * @author katsu
 */
@NoOfuscation
public class SearchField {
    private String key;
    private String value;

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public static Map<String,String> parse(List<SearchField> search){        
        if (search!=null && search.size()>0){
            Map<String,String> result=new HashMap<String,String>();
            for (SearchField sf:search){
                result.put(sf.getKey(), sf.getValue());
            }
            return result;
        }
        return null;
    }
}
