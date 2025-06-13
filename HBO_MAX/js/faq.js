  document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
      const question = item.querySelector(".faq-question");
      const answer = item.querySelector(".faq-answer");

      question.addEventListener("click", () => {
        const isOpen = item.classList.contains("active");

        faqItems.forEach(el => {
          el.classList.remove("active");
          const ans = el.querySelector(".faq-answer");
          ans.style.maxHeight = null;
          ans.classList.remove("open");
        });

        if (!isOpen) {
          item.classList.add("active");
          answer.classList.add("open");
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
    });
  });