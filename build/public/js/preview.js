
var previewMain;

function preview_init()
{
	displayList.preview = document.querySelector("#preview");
	displayList.preview.addEventListener("click", preview_close, false);


	trace("preview_init();");
}

function preview_request(event)
{
	event.preventDefault();

	previewMain = {};
	previewMain.url_asset = event.target.attributes[2].nodeValue;
	previewMain.scrollSet	= event.pageY;

	displayList.wrapper.classList.add("preview-lock");
	displayList.wrapper.scrollTop += previewMain.scrollSet;

	displayList.preview.classList.remove("preview-default");

	trace(previewMain);
}

function preview_close(event)
{
	event.preventDefault();

	displayList.wrapper.addEventListener("webkitTransitionEnd", preview_end, false);
	displayList.wrapper.addEventListener("transitionend", preview_end, false);

	displayList.wrapper.classList.remove("preview-lock");

	var t = setTimeout(test, 20);

	delete previewMain;
}

function test()
{
	window.scrollTo(0, (previewMain.scrollSet - 100));
}

function preview_end(event)
{
	displayList.wrapper.removeEventListener("webkitTransitionEnd", preview_end, false);
	displayList.wrapper.removeEventListener("transitionend", preview_end, false);

	displayList.preview.classList.add("preview-default");
}