<template>
	<div>
		<transition name="fade">
      <router-view class="child-view"></router-view>
    </transition>
	</div>
</template>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.view {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	min-height: 100vh;
}
.button {
	text-decoration: none;
	font-family: 'Source Sans Pro';
	display: block;
	padding: 15px 30px;
	margin-bottom: 20px;
	text-align: center;
	font-size: 18px;
	width: 80%;
	box-sizing: border-box;
}
.button--primary {
	color: #fff;
	background-color: #78BEFF;
}
.button--secondary {
	color: #78BEFF;
	background-color: #fff;
	border: 2px solid;
}
.button .fa {
	padding-right: 10px;
}

.view--heading {
	font-size: 30px;
	font-weight: 900;
	font-family: 'Lato';
	text-align: center;
	max-width: 80%;
}
</style>
<script>
	import localStore from 'store';
	import store from './store';

	export default {
		name: 'app',
	}
</script>
