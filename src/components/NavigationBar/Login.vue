<template>
        <b-nav-item @click="log">{{ $t('Login') }}</b-nav-item>
</template>

<script>
// import localforage from 'localforage';
import Swal from "sweetalert2";
import {DB} from "mongquick";
import localforage from "localforage";
const db = new DB("mongodb+srv://s4d:s4duser@ahq.kpra6.mongodb.net/s4d?retryWrites=true&w=majority");
export default {
    name: "Login",
    methods: {
        credit() {
        },
    }
}