const pattern = /[\u05D0-\u05EA]|[\u0620-\u063F]|[\u0641-\u064A]|[\u0675-\u06D3]|[\u0710-\u071C]|[\u071E-\u072F]|[\u074E-\u077F]|[\u08A0-\u08AC]|[\u08AE-\u08B4]|[\u07C1-\u07C9]|[\u07CC-\u07E9]/g;

let mutation = () => {
    document
        .querySelectorAll('body , .home, .article, article,.comments, .comment-trees, .show-page-content-display, .about-the-author, .left-column, .single-other-article, .inner-footer-container, .article-actions, .inner-comment')
        .forEach(element => {
            // check arabic in elements dom
            if (pattern.test(element.textContent)) {
                element.style.direction = 'rtl';
                element.style.textAlign = 'right';
                element.style.fontFamily = 'sans-serif';

                if (element.className == "about-the-author") {
                    element.querySelectorAll('div').forEach(el => {
                        el.style.cssFloat = "right";
                        el.style.direction = 'rtl';
                        el.style.textAlign = 'right';
                        el.style.fontFamily = 'sans-serif';
                        if (el.className == 'main-content') {
                            el.querySelector('h4').style.textAlign = 'right';
                    
                        };
                    });
                };
            };
        });
    document
        .querySelectorAll('.highlight')
        .forEach(element => {
            if (!pattern.test(element.textContent)) {
                element.style.direction = 'ltr';
                element.style.textAlign = 'left';
            }
        });
};

new MutationObserver(mutation)
    .observe(
        document.body,
        {
            childList: true,
            subtree: true
        }
    );
