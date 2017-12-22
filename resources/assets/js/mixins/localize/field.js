import Vue from 'vue';
import { localeObject } from "./utils";

export default {
    inject: {
        $form: { default:()=>new Vue() }
    },
    computed:{
        locales() {
            return this.$form.locales;
        }
    },
    methods: {
        emptyLocaleObject(defaultValue=null) {
            return localeObject({ locales:this.locales, resolve:()=>defaultValue });
        }
    }
}