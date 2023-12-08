function RippleEffect(btn_class_name: string) {
    /**ripple effect */
    const btn: any = document.querySelector(btn_class_name);
    let ripple = document.createElement("span");
    ripple.classList.add("ripple");
    btn.appendChild(ripple);
    // let x = e.clientX - e.target.offsetLeft;
    // let y = e.clientY - e.target.offsetTop;
    // ripple.style.left = `${x}px`;
    // ripple.style.top = `${y}px`;
    // Remove span after 0.6s
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

export default RippleEffect;
