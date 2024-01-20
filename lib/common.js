export function splideBar(textRef,didEffect,updateProgressBar) {
  if (didEffect.current) return;
  didEffect.current = true;
  if ( textRef.current ) {
    updateProgressBar(textRef)
  }

  const splide__list = textRef.current.splide.root.querySelector('.splide__list');
  splide__list.addEventListener('transitionend', () => {
    updateProgressBar(textRef)
  });

  window.addEventListener('resize', () => {
    updateProgressBar(textRef)
  });
}

export function headerSmoothScroll() {
  const header = document.querySelector('header');
  const skillElement = document.getElementById('skill');
  const headerHeight = header.offsetHeight;

  window.addEventListener('scroll', function () {
    // id="skill" の要素が表示領域に入ったらヘッダーを表示
    if (isElementInViewport(skillElement)) {
      header.style.display = 'block';
    } else {
      // id="skill" の要素が表示領域外になったらヘッダーを非表示
      header.style.display = 'none';
    }
  });

  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    const scrollPosition = window.scrollY || window.pageYOffset;
    return (
      scrollPosition >= window.pageYOffset + rect.top
    );
  }

  document.querySelectorAll('nav a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      
      const adjust = headerHeight;
      const speed = 400;
      const href = link.getAttribute('href');
      const target = href === "#" || href === "" ? document.documentElement : document.querySelector(href);
      if (target) {
        const position = target.getBoundingClientRect().top + window.pageYOffset - adjust;  
        window.scrollTo({
          top: position,
          behavior: 'smooth'
        });
      }
    });
  });
};

export function sectionInView() {
  const targets = document.querySelectorAll(".scroll__target");

  const options = {
    root: null, // 今回はビューポートをルート要素とする
    rootMargin: "-50% 0px", // ビューポートの中心を判定基準にする
    threshold: 0 // 閾値は0
  };
  const observer = new IntersectionObserver(doWhenIntersect, options);
  // それぞれのtargetを監視する
  targets.forEach(target => {
    observer.observe(target);
  });

  /**
   * 交差したときに呼び出す関数
   * @param entries
   */
  function doWhenIntersect(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activateIndex(entry.target);
      }
    });
  }

  /**
   * 目次の色を変える関数
   * @param element
   */
  function activateIndex(element) {
    // すでにアクティブになっている目次を選択
    const currentActiveIndex = document.querySelector("header nav ul li.is-active");
    // すでにアクティブになっているものが0個の時（=null）以外は、activeクラスを除去
    if (currentActiveIndex !== null) {
      currentActiveIndex.classList.remove("is-active");
    }
    // 引数で渡されたDOMが飛び先のaタグを選択し、activeクラスを付与
    const newActiveIndex = document.querySelector(`a[href='#${element.id}']`);
    newActiveIndex.parentElement.classList.add("is-active");
  }
}

export function createTypingAnimation(target) {
  document.querySelector('.cursor').classList.add('typingStart');

  // テキストごとにspanタグを生成する
  const element = document.querySelector(target);
  element.style.opacity = "1";
  let text = element.innerHTML.split('<br>');
  let newText = "";

  text.forEach(function(line, lineIndex) {
    let lineText = line.trim();
    let lineSpan = "";

    for (let i = 0; i < lineText.length; i++) {
      if (lineText[i] !== " ") {
        let span = document.createElement('span');
        span.textContent = lineText[i];
        lineSpan += span.outerHTML;
      } else {
        lineSpan += " ";
      }
    }

    if (lineIndex < text.length - 1) {
      lineSpan += "<span><br></span>";
    }

    newText += lineSpan;
  });

  element.innerHTML = newText;
  // elements.forEach(function(element) {});
  // タイピングアニメーション
  let children = [...element.children]; // 生成したspanタグを取得
  let time = 100;
  children.forEach(function(child, i) {
    setTimeout(function() {
      child.style.display = "inline";
      child.style.transition = "opacity " + time / 1000 + "s";
      child.style.opacity = 1;
    }, time * i);
  });

  let totalTime = time * (children.length+30)
  setTimeout(function() {
    element.classList.add('typingEnd');
  }, totalTime);
  // elements.forEach(function(element) {})
}
