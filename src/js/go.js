import $ from "jquery";

$(() => {
	let $main = $("main");
	$("[data-hook='show-px']").on("click", () => {
		$main.addClass("is-px").removeClass("is-smith");
	});
	$("[data-hook='show-smith']").on("click", () => {
		$main.addClass("is-smith").removeClass("is-px");
	});
});