const axios = require('axios');
const Cookies = require('js-cookie')

const headers = { 'headers': {
		"Content-Type": "application/json",
		'Authorization': `Bearer ${Cookies.get('jwt')}`
	}} 

export default class Api {

	static get = async (URL) => {
		return new Promise((resolve, reject) => {
		    axios.get(URL, headers).then(function (response) {
			    resolve(response.data);
			}).catch(function (error) {
			    reject(error);
			}).finally(function () {
			    // always executed
			});

		});

	};

	static login = async (URL, data) => {

		return new Promise((resolve, reject) => {
			axios.post(URL, data).then(function (response) {
				resolve(response.data);
			}).catch(function (error) {
				reject(error);
			});
		});
	};

	static post = async (URL, data) => {

		return new Promise((resolve, reject) => {
			axios.post(URL, data, headers).then(function (response) {
				resolve(response.data);
			}).catch(function (error) {
				reject(error);
			});
		});
	};

	static put = async (URL, data) => {

		return new Promise((resolve, reject) => {
			axios.put(URL, data, headers).then(function (response) {
				resolve(response.data);
			}).catch(function (error) {
				reject(error);
			});
		});
	};
}
