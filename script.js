document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("tweetButton").addEventListener("click", tweetMessage);
});

function tweetMessage() {
    const message = "Arlee GreenFlash\n#ArleeBNK48 #BNK48\n#GreenFlashConceptDay1\n#BNK4818thSINGLE";
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
    window.open(tweetUrl, '_blank');
}
