from playwright.sync_api import sync_playwright

def verify_devices():
    devices = {
        "Desktop": {"width": 1280, "height": 720},
        "Laptop": {"width": 1024, "height": 768},
        "Tablet": {"width": 768, "height": 1024},
        "Mobile": {"width": 375, "height": 667}
    }

    with sync_playwright() as p:
        browser = p.chromium.launch()
        for device, viewport in devices.items():
            page = browser.new_page(viewport=viewport)
            page.goto("http://localhost:3000/")
            page.wait_for_timeout(2000)  # Wait for animations
            page.screenshot(path=f"screenshot_{device.lower()}.png", full_page=True)
            print(f"Captured {device} screenshot")
        browser.close()

if __name__ == "__main__":
    verify_devices()
