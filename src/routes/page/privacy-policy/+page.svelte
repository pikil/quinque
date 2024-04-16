<!-- eslint-disable max-len -->
<div class="text-white px-2">
  <AboutPageSublinks selectedIndex={2} />
  <div class="px-4">
    <p  class={pageParagraphClasses}>At {mainNameShort}, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your information when you use our online chess/battleship game service.</p>
    <h3 class={pageTitleClasses}>Information We Collect</h3>
    <p  class={pageParagraphClasses}>We do not collect any personal information from users. Our game service does not require registration, login, or the submission of any identifying data.</p>
    <h3 class={pageTitleClasses}>Use of Information</h3>
    <p  class={pageParagraphClasses}>Since we do not collect any personal information, we do not use or share any user data.</p>
    <h3 class={pageTitleClasses}>Data Security</h3>
    <p  class={pageParagraphClasses}>Our game service operates through a peer-to-peer connection using WebRTC technology. The connection handshake candidates are encrypted with crypto.js and can only be read by the established WebRTC connection between the two players. No data is stored on our servers.</p>
    <h3 class={pageTitleClasses}>Communication</h3>
    <p  class={pageParagraphClasses}>Our game service does not provide any chat or communication features beyond the ability to make moves in the game itself. Users cannot impersonate or communicate with others outside of the game context.</p>
    <h3 class={pageTitleClasses}>Third-Party Services</h3>
    <p  class={pageParagraphClasses}>Our website does not integrate with any third-party services or share user data with any external parties.</p>
    <h3 class={pageTitleClasses}>Children's Privacy</h3>
    <p  class={pageParagraphClasses}>Our game service is not intended for children under the age of 13. We do not knowingly collect or use any information from children.</p>
    <h3 class={pageTitleClasses}>Changes to This Privacy Policy</h3>
    <p  class={pageParagraphClasses}>We may update this Privacy Policy from time to time. We encourage you to review this policy periodically for any changes.</p>
    <h3 class={pageTitleClasses}>Contact Us</h3>
    <p  class={pageParagraphClasses}>If you have any questions or concerns about this Privacy Policy, please contact us at our <a href={discordPath} target="_blank" class={linkClasses}>Discord server</a>.</p>
    <p  class={pageParagraphClasses}>By using our game service, you agree to the terms of this Privacy Policy.</p>
    <p  class={pageParagraphClasses}>Last Updated: 04/04/2024</p>
  </div>
</div>
<script>
import { mainNameShort } from '$data/strings'
import { discordPath } from '$data/strings'
import { linkClasses, pageParagraphClasses, pageTitleClasses } from '$utils/dom'
import AboutPageSublinks from '$blocks/AboutPageSublinks.svelte'
import { headerTitle } from '$stores/layout-store'

$headerTitle = 'Privacy policy'
</script>
