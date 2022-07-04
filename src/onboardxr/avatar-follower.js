window.avatarToFollow = null;

window.setFollow = (nameToFollow) => {
    for(let eltt in NAF.entities.entities) {
        for(let att of  NAF.entities.entities[eltt].attributes) {
            if(att.name === "networked-avatar"
            && NAF.entities.entities[eltt].attributes["id"].nodeValue !== "avatar-rig"
            && NAF.entities.entities[eltt].children[3].components["name-tag"].displayName === nameToFollow) { 
                console.log(NAF.entities.entities[eltt])
                window.avatarToFollow = NAF.entities.entities[eltt].object3D;
            }
        }
    }
}

window.startFollow = () => {

    window.startFol = true;

    function followAvatar() {

        selfEl = AFRAME.scenes[0].querySelector("#avatar-rig").object3D;

        if(window.avatarToFollow != null) {
            selfEl.position.x = window.avatarToFollow.position.x;
            selfEl.position.y = window.avatarToFollow.position.y - 1;
            selfEl.position.z = window.avatarToFollow.position.z;
        }

        if(!window.stopFol) {
            window.requestAnimationFrame(followAvatar);
        }
    }

    window.requestAnimationFrame(followAvatar);

}

window.stopFollow = () => {
    window.stopFol = true;
    console.log(window.stopFol)
}

window.nemoFollow = () => {
    window.setFollow("Mrs_Nemo");
    window.startFollow();
}