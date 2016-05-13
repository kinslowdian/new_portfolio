
var previewMain;

function preview_init()
{
	displayList.preview 					= document.querySelector("#preview");
	displayList.previewImg 				= document.querySelector("#preview img");
	displayList.previewPreloader 	= document.querySelector("#preview .preview-preloader-dot");

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

	displayList.previewPreloader.classList.add("preview-preload-tween");

	displayList.previewImg.setAttribute("src", previewMain.url_asset);

	window.scrollTo(0, 0);

	displayList.preview.classList.remove("preview-default");

	trace(previewMain);
}

function preview_close(event)
{
	event.preventDefault();

	displayList.wrapper.addEventListener("webkitTransitionEnd", preview_end, false);
	displayList.wrapper.addEventListener("transitionend", preview_end, false);

	displayList.wrapper.classList.remove("preview-lock");

	var t = setTimeout(scrollReset, 20);

	delete previewMain;
}

function scrollReset()
{
	window.scrollTo(0, (previewMain.scrollSet - 100));
}

function preview_end(event)
{
	displayList.wrapper.removeEventListener("webkitTransitionEnd", preview_end, false);
	displayList.wrapper.removeEventListener("transitionend", preview_end, false);

	displayList.preview.classList.add("preview-default");
	displayList.previewPreloader.classList.remove("preview-preload-tween");
	displayList.previewImg.setAttribute("src", "");
}