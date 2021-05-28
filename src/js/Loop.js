export const Loop = () => {
  let i = 0;
  let j = 0;
  let current = [];
  let isDeleting = false;
  let isEnd = false;
  const phrases = ['Heze', 'UI & UX'];
  const typing = () => {
    isEnd = false;
    if (i < phrases.length) {
      isEnd = false;
      if (!isDeleting && j <= phrases[i].length) {
        current.push(phrases[i][j]);
        j++;

        if (isDeleting && j <= phrases[i].length) {
          current.pop(phrases[i][j]);
          j--;
        }

        if (j === phrases[i].length) {
          isEnd = true;
          isDeleting = true;
        }

        if (isDeleting && j === 0) {
          current = [];
          isDeleting = false;
          i++;
          if (i === phrases.length) {
            i = 0;
          }

          const spedUp = Math.random() * (80 - 50) + 50;
          const normalSpeed = Math.random() * (300 - 200) + 200;
          const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
          setTimeout(loop, time);
        }
      }
    }
  };

  typing();
};
