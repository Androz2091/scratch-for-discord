<template>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">{{ $t("edit.title") }}</a>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#" @click.prevent="store.workspace.undo(false)">{{ $t("edit.undo") }}</a></li>
            <li><a class="dropdown-item" href="#" @click.prevent="store.workspace.undo(true)">{{ $t("edit.redo") }}</a></li>
            <li><a class="dropdown-item" href="#" @click.prevent="store.workspace.clear()">{{ $t("edit.clear", { blockCount: store.blockCount }) }}</a></li>
            <li><a class="dropdown-item" href="#" @click.prevent="store.workspace.cleanUp()">{{ $t("edit.cleanup") }}</a></li>
            <li><a class="dropdown-item" href="#" @click.prevent="clearDatabase">{{ $t("edit.cleardb") }}</a></li>
        </ul>
    </li>
</template>

<script setup>
import store from "../../store";

// Database used by the desktop app when it runs the bot
function clearDatabase() {
    localStorage.setItem("easyjsondatabase", "{}");
}
</script>
