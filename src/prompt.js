/* eslint-disable no-import-assign */
/**
 * @license
 * 
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Define custom blocks.
 * @author abbychau@gmail.com (Abby Chau)
 */


import * as Blockly from 'blockly/core';
import Swal from "sweetalert2";

var renameVar = function (name) {
	return name;
};

const isMobile = function () {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

Blockly.dialog.prompt = function (msg, defaultValue, callback) {
	if (isMobile()) {
		callback(renameVar(prompt("Variable:")))
		return
	}
	Swal.fire({
		title: "Variable:",
		input: "text",
		inputAttributes: {
			autocapitalize: "off"
		},
		showCancelButton: true,
		confirmButtonText: "Confirm",
		showLoaderOnConfirm: true,
		allowOutsideClick: () => !Swal.isLoading()
	}).then(result => {
		if (result.value) {
			callback(renameVar(result.value));
		}
	});
};
