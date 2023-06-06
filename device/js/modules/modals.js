const modals = () => {

    function bindModals(triggerSelector, modalSelector, closeSelector) {
        
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelectorAll(closeSelector);
        const body = document.querySelector('body');


        try {
            trigger.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    if (e.target) {
                        e.preventDefault();
                    }
    
                    modal.classList.add('open');
                    body.classList.add('no-scroll');
    
                });
            });
    
            close.forEach(ex => {
                ex.addEventListener('click', () => {
                    closeModal();
                });
            })
    
            modal.addEventListener('click', (e) => {
                const block = modal.querySelector('.popup__body');
                if (e.target === block) {
                    closeModal();
                }
            });
    
            function closeModal() {
                if (modal) {
                    modal.classList.remove('open');
                    body.classList.remove('no-scroll');
                }
            }
        } catch(e){}
    }

    try {
        bindModals('[data-href="popup1"]', '#popup1', '.popup__close');
        bindModals('[data-href="popup2"]', '#popup2', '.popup__close');
        bindModals('[data-href="popup3"]', '#popup3', '.popup__close');
        bindModals('[data-href="popup4"]', '#popup4', '.popup__close');
        bindModals('[data-href="popup-yamato0809"]', '#popup-yamato0809', '.popup-specifications__content .popup__close');
        bindModals('[data-href="popup-aovo365MPro"]', '#popup-aovo365MPro', '.popup-specifications__content .popup__close');
        bindModals('[data-href="popup-yamato0809Pro"]', '#popup-yamato0809Pro', '.popup-specifications__content .popup__close');
        bindModals('[data-href="popup-forwardsporting"]', '#popup-forwardsporting', '.popup-specifications__content .popup__close');
        bindModals('[data-href="popup-forwardsportingx"]', '#popup-forwardsportingx', '.popup-specifications__content .popup__close');
        bindModals('[data-href="popup-friend"]', '#popup-friend', '.popup-friend__content .popup__close');
        bindModals('[data-href="popup-certificate"]', '#popup-certificate', '.popup-certificate__content .popup__close');
        bindModals('[data-href="popup-minakov8pro"]', '#popup-minakov8pro', '.popup-specifications__content .popup__close');
        bindModals('[data-href="popup-minakov8probatery"]', '#popup-minakov8probatery', '.popup-specifications__content .popup__close');
        bindModals('[data-href="popup-xiaomiredmi"]', '#popup-xiaomiredmi', '.popup-phone__content .popup__close');
        bindModals('[data-href="popup-xboxones1"]', '#popup-xboxones1', '.popup-specifications .popup__close');
        bindModals('[data-href="popup-led32"]', '#popup-led32', '.popup-specifications .popup__close');
        bindModals('[data-href="popup-led43"]', '#popup-led43', '.popup-specifications .popup__close');
    } catch(e){}
}

export default modals;
