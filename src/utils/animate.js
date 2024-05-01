import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (target, animationProps, scrollProps) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: 'restart reverse restart reverse',
      start: 'top 85%',
      ...scrollProps,
    }
  })
}



/**
 * Animates elements using GSAP (GreenSock Animation Platform) with a specified timeline.
 *
 * @param {object} timeline - GSAP timeline instance to which the animations will be added.
 * @param {object} rotationRef - Reference to the rotation property that will be animated.
 * @param {number} rotationState - The target rotation state that the `rotationRef` should animate to.
 * @param {object} firstTarget - The first element to be animated.
 * @param {object} secondTarget - The second element to be animated.
 * @param {object} animationProps - Additional animation properties for both `firstTarget` and `secondTarget`.
 */
export const animateWithGsapTimeline = (
  timeline,
  rotationRef,
  rotationState,
  firstTarget,
  secondTarget,
  animationProps
) => {

    timeline.to(rotationRef.current.rotation, {
        y: rotationState,
        duration: 1,
        ease: 'power2.inOut'
    })

    timeline.to(firstTarget, {
        ...animationProps,
        ease: 'power2.inOut'
    },
'<')
    timeline.to(secondTarget, {
        ...animationProps,
        ease: 'power2.inOut'
    },
'<')


};
