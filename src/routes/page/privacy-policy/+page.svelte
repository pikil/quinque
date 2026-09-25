<!-- eslint-disable max-len -->
<div class="text-white px-2">
  <AboutPageSublinks selectedIndex={2} />
  <div class="px-4">
    <p  class={pageParagraphClasses}>At {mainNameShort}, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your information when you use our game service.</p>
    <h3 class={pageTitleClasses}>Information We Collect</h3>
    <p  class={pageParagraphClasses}>We do not collect any personal information from users. Our game service does not require registration, login, or the submission of any identifying data.</p>
    <p  class={pageParagraphClasses}>Your settings are saved in your browser's local storage and never leave your device.</p>
    <p  class={pageParagraphClasses}>To set up an online game, a room record is stored in Google Firebase (Firestore). It holds the room ID, the grid size, the sequence of patterns, the creation time, both players' public encryption keys and, while the players are connecting, their encrypted connection details (which include IP addresses). The connection details are cleared once they have been used; the rest of the room record is currently kept.</p>
    <h3 class={pageTitleClasses}>Use of Information</h3>
    <p  class={pageParagraphClasses}>Room records are used only to connect two players with each other. We do not use them for anything else and do not sell or share them.</p>
    <h3 class={pageTitleClasses}>Data Security</h3>
    <p  class={pageParagraphClasses}>Online games use a direct peer-to-peer connection built on WebRTC technology. The connection details exchanged through the room record are encrypted in your browser using the Web Crypto API (ECDH key agreement and AES-GCM), so only the two players' browsers can read them. Moves are sent directly between the players and are not stored on our servers.</p>
    <h3 class={pageTitleClasses}>Communication</h3>
    <p  class={pageParagraphClasses}>Our game service does not provide any chat or communication features beyond the ability to make moves in the game itself. Users cannot impersonate or communicate with others outside of the game context.</p>
    <h3 class={pageTitleClasses}>Third-Party Services</h3>
    <p  class={pageParagraphClasses}>The website is hosted on GitHub Pages. Online games use Google Firebase (Firestore) to exchange the room record described above, and public STUN servers run by Google and Mozilla to discover your network address. These providers process your IP address under their own privacy policies. Games against the computer or on a single device do not use Firebase or the STUN servers.</p>
    <h3 class={pageTitleClasses}>Children's Privacy</h3>
    <p  class={pageParagraphClasses}>Our game service is not intended for children under the age of 13. We do not knowingly collect or use any information from children.</p>
    <h3 class={pageTitleClasses}>Changes to This Privacy Policy</h3>
    <p  class={pageParagraphClasses}>We may update this Privacy Policy from time to time. We encourage you to review this policy periodically for any changes.</p>
    <h3 class={pageTitleClasses}>Contact Us</h3>
    <p  class={pageParagraphClasses}>If you have any questions or concerns about this Privacy Policy, please contact us at our <a href={discordPath} target="_blank" rel="external" class={linkClasses}>Discord server</a>.</p>
    <p  class={pageParagraphClasses}>By using our game service, you agree to the terms of this Privacy Policy.</p>
    <p  class={pageParagraphClasses}>Last Updated: 24/09/2026</p>
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
