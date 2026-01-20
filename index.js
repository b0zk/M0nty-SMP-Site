const copyButton = document.getElementById("copy_ip_button");

const onCopyClick = async () => {
    try {
        await navigator.clipboard.writeText("play.b0zk.xyz");

        Toastify({
            text: "Server address copied!",
            duration: 1800,
            gravity: "top",
            position: "right",
            close: true,
            stopOnFocus: true,
            offset: {
                x: 20,
                y: 20
            },
            style: {
                fontFamily: '"Press Start 2P", system-ui',
                fontSize: "11px",
                color: "#0f1f0f",
                padding: "14px 18px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #3aff3a, #1e8f1e)",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)"
            }
        }).showToast();
    } catch {
        Toastify({
            text: "Failed to copy server address",
            duration: 2000,
            gravity: "top",
            position: "right",
            close: true,
            offset: {
                x: 20,
                y: 20
            },
            style: {
                fontFamily: '"Press Start 2P", system-ui',
                fontSize: "11px",
                color: "#2b0000",
                padding: "14px 18px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #ff4a4a, #8f1e1e)",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)"
            }
        }).showToast();
    }
};

copyButton.addEventListener("click", onCopyClick);
