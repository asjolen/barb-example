import anime from "animejs";

export class Animations {
  target?: string;
  easing?: string = "spring(1, 80, 10, 0)";
  private animation: any;
  private animationRevealed = false;

  constructor(target: string, easing?: "spring(1, 80, 10, 0)") {
    if (!this.animation) {
      this.target = target;
      this.easing = easing ? easing : this.easing;
      this.setupAnimation();
    }
  }

  private setupAnimation() {
    this.animation = this.animation = anime.timeline({easing: this.easing, autoplay: false}).add({
      targets: this.target,
      translateY: [30, 0],
      opacity: [0, 1],
      delay: (el, i) => 125 * i,
    });

    this.pauseAnimation();
  }

  playAnimation() {
    if (!this.animationRevealed) {
      this.animation.play();
      this.animationRevealed = true;
    }
  }

  pauseAnimation() {
    this.animation.pause();
  }

  isElementInView(el: any) {
    if (el && el.length) {
      const rect = el[0].getBoundingClientRect();

      if (rect.top < (window.innerHeight - 250)) {
        return true;
      }
    }

    return false;
  }
}