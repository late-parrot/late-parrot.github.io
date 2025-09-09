document.querySelectorAll('.main h1').forEach((x) => {
    var node = document.createElement('a');
    node.href = '#' + x.id;
    node.innerHTML = '§'; //🔗 works too, but needs font-size: .6em
    x.appendChild(node);
});

/*
async function writeClipboardText(text) {
    try {
        await navigator.clipboard.writeText(text);
    } catch (error) {
        console.error("Error attempting to copy string '" + text + "': " + error.message);
    }
}

function clipboardAvailable() {
    document.body.focus();
    navigator.clipboard.readText().catch(e => {
        console.error('Clipboard API gave following error, disabling clipboard functionality: ' + e.message);
        return false;
    });
    return true;
}

navigator.clipboard.readText().then(() => {
    document.querySelectorAll('.main pre:has(code)').forEach(x => {
        var node = document.createElement('button');
        var i = document.createElement('i');
        i.classList.add("fa-regular");
        i.classList.add("fa-copy");
        node.appendChild(i);
        node.addEventListener('click', () => {
            writeClipboardText(x.querySelector('code').innerHTML);
        });
        x.appendChild(node);
    });
}).catch(e => console.error('Clipboard API gave following error, disabling clipboard functionality: ' + e.message));
*/

addEventListener('scroll', () => {
    if (document.querySelector('html').scrollTop < 10) {
        document.querySelector('.nav').classList.add('expanded');
    } else {
        document.querySelector('.nav').classList.remove('expanded');
    }
});
