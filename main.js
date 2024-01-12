const Accbtns = document.querySelectorAll('#accordion__btn');

Accbtns.forEach(btn => {
    btn.addEventListener('click', function() {
        Accbtns.forEach(beforeBtn => {
            if (beforeBtn !== btn) {
                beforeBtn.classList.remove('active');
                const beforeAccDesc = beforeBtn.nextElementSibling;
                beforeAccDesc.style.maxHeight = null;
            }
        });

        this.classList.toggle('active');
        const acc_dsc = this.nextElementSibling;

        if (acc_dsc.style.maxHeight) {
            acc_dsc.style.maxHeight = null;
        } else {
            acc_dsc.style.maxHeight = acc_dsc.scrollHeight + 'px';
        }
    });
});
