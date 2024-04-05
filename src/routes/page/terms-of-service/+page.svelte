<!-- eslint-disable max-len -->
<div class="max-w-[600px] max-auto text-white px-2">
  <PageHeader {title} />
  <AboutPageSublinks selectedIndex={1} />
  <div class="px-4">
    <p class={pageParagraphClasses}>Welcome to {mainNameShort}! These Terms of Service ("Terms") govern your use of our game service ("Service"). By accessing or using our Service, you agree to be bound by these Terms.</p>
    <h3 class={pageTitleClasses}>Eligibility</h3>
    <p class={pageParagraphClasses}>Our Service is intended for individuals aged 13 and older. If you are under the age of 13, you are not permitted to use our Service.</p>
    <h3 class={pageTitleClasses}>Use of the Service</h3>
    <p class={pageParagraphClasses}>Our Service allows you to play {mainNameShort} game with another player through a peer-to-peer connection using WebRTC technology. You agree to use our Service solely for its intended purpose and in compliance with all applicable laws and regulations.</p>
    <h3 class={pageTitleClasses}>User conduct</h3>
    <p class={pageParagraphClasses}>You agree to use our Service in a responsible and respectful manner. You shall not:</p>
    <ul class="pl-6 list-[circle]">
      <li class={pageParagraphClasses}>Engage in any illegal or unauthorized activities;</li>
      <li class={pageParagraphClasses}>Impersonate or misrepresent your identity;</li>
      <li class={pageParagraphClasses}>Interfere with or disrupt the Service;</li>
      <li class={pageParagraphClasses}>Attempt to gain unauthorized access to our systems or networks;</li>
      <li class={pageParagraphClasses}>Use the Service to transmit viruses, malware, or other harmful code;</li>
    </ul>
    <h3 class={pageTitleClasses}>Intellectual Property</h3>
    <p class={pageParagraphClasses}>All intellectual property rights in our Service, including but not limited to copyrights, trademarks, and trade secrets, are owned by {mainNameShort}'s creators or its licensors. You may not modify, reproduce, distribute, or create derivative works based on our Service without our prior written consent.</p>
    <h3 class={pageTitleClasses}>Limitations of Liability</h3>
    <p class={pageParagraphClasses}>Our Service is provided "as is" without warranties of any kind, whether express or implied. We shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our Service.</p>
    <h3 class={pageTitleClasses}>Indemnification</h3>
    <p class={pageParagraphClasses}>You agree to indemnify, defend, and hold harmless {mainNameShort}'s creators, its affiliates, and their respective directors, officers, employees, and agents from and against any and all claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising out of or in connection with your use of our Service or violation of these Terms.</p>
    <h3 class={pageTitleClasses}>Termination</h3>
    <p class={pageParagraphClasses}>We reserve the right to terminate or suspend your access to our Service at any time, without prior notice, for any reason, including but not limited to a violation of these Terms.</p>
    <h3 class={pageTitleClasses}>Modifications</h3>
    <p class={pageParagraphClasses}>We may modify or update these Terms from time to time. We will notify you of any material changes by posting the updated Terms on our website. Your continued use of our Service after the effective date of the updated Terms constitutes your acceptance of the modified Terms.</p>
    <h3 class={pageTitleClasses}>Contact Us</h3>
    <p class={pageParagraphClasses}>If you have any questions or concerns about these Terms, please contact us at our <a href={discordPath} target="_blank" class={linkClasses}>Discord server</a>.</p>
    <p class={pageParagraphClasses}>By using our Service, you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service.</p>
    <p class={pageParagraphClasses}>Last Updated: 04/04/2024</p>
  </div>
</div>
<script>
import AboutPageSublinks from '$blocks/AboutPageSublinks.svelte'
import { discordPath, mainNameShort } from '$data/strings'
import { linkClasses, pageParagraphClasses, pageTitleClasses } from '$utils/dom'
import PageHeader from '../../../layouts/PageHeader.svelte'

const title = 'Terms of Service'
</script>
