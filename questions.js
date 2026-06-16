const questionBank = [
  {
    "id": 1,
    "questionText": "Which statement best captures “security is end-to-end”?",
    "options": [
      "Strong encryption means other layers can be ignored",
      "One weak critical component can break the whole system",
      "Security only depends on network firewalls",
      "Security is determined by the strongest component"
    ],
    "correctAnswers": [
      1
    ],
    "type": "mcq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: One weak critical component can break the whole system. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 2,
    "questionText": "Which activity belongs mainly to the “after incident” phase?",
    "options": [
      "Define security goals",
      "Post-mortem, patch, improve",
      "Unit testing before deployment",
      "Static analysis before release"
    ],
    "correctAnswers": [
      1
    ],
    "type": "mcq",
    "category": "Week 01-02: Security Principles & Models",
    "explanation": "Correct answer is: Post-mortem, patch, improve. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 3,
    "questionText": "What does confidentiality mean in the CIA triad?",
    "options": [
      "Data is always available instantly",
      "Only authorised parties can access the data",
      "Data can never be deleted",
      "Data is backed up every hour"
    ],
    "correctAnswers": [
      1
    ],
    "type": "mcq",
    "category": "Week 01-02: Security Principles & Models",
    "explanation": "Correct answer is: Only authorised parties can access the data. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 4,
    "questionText": "Which is part of a system model?",
    "options": [
      "Attacker motivation only",
      "Legal reporting deadline",
      "Actors and components of the system",
      "Exam timetable"
    ],
    "correctAnswers": [
      2
    ],
    "type": "mcq",
    "category": "Week 01-02: Security Principles & Models",
    "explanation": "Correct answer is: Actors and components of the system. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 5,
    "questionText": "Which is part of a threat model?",
    "options": [
      "Attacker capability and goal",
      "UI colour preference",
      "Lecture room location",
      "Assignment marking rubric"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 01-02: Security Principles & Models",
    "explanation": "Correct answer is: Attacker capability and goal. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 6,
    "questionText": "Which best describes GPT/LLM behaviour?",
    "options": [
      "It formally verifies every answer",
      "It predicts likely next tokens/patterns",
      "It only copies exact training sentences",
      "It always knows ground truth first"
    ],
    "correctAnswers": [
      1
    ],
    "type": "mcq",
    "category": "Week 03: LLMs & Android Security",
    "explanation": "Correct answer is: It predicts likely next tokens/patterns. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 7,
    "questionText": "Why is decompilation difficult for an LLM?",
    "options": [
      "APKs cannot be unpacked",
      "Machine code is low-level, ambiguous, and needs semantic reasoning",
      "Android source code is always bundled",
      "Decompiled code always equals original code"
    ],
    "correctAnswers": [
      1
    ],
    "type": "mcq",
    "category": "Week 03: LLMs & Android Security",
    "explanation": "Correct answer is: Machine code is low-level, ambiguous, and needs semantic reasoning. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 8,
    "questionText": "Which statement about Android sandboxing is correct?",
    "options": [
      "Apps normally run as the same Linux user",
      "App store review is the main sandbox",
      "Each app normally runs as a separate Linux user/UID",
      "Apps directly control hardware without mediation"
    ],
    "correctAnswers": [
      2
    ],
    "type": "mcq",
    "category": "Week 03: LLMs & Android Security",
    "explanation": "Correct answer is: Each app normally runs as a separate Linux user/UID. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 9,
    "questionText": "What does classes.dex contain in an APK?",
    "options": [
      "Original Java/Kotlin source code",
      "Compiled Android bytecode",
      "Only images and layouts",
      "The app’s private user data"
    ],
    "correctAnswers": [
      1
    ],
    "type": "mcq",
    "category": "Week 03: LLMs & Android Security",
    "explanation": "Correct answer is: Compiled Android bytecode. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 10,
    "questionText": "Why does the runtime UI tree matter for mobile agents?",
    "options": [
      "It hides clickable elements",
      "It makes screen elements machine-readable",
      "It guarantees all actions are safe",
      "It removes the need to observe again"
    ],
    "correctAnswers": [
      1
    ],
    "type": "mcq",
    "category": "Week 03: LLMs & Android Security",
    "explanation": "The runtime UI tree represents the visual interface in a structured, machine-readable format (text, bounds, and interactive states) that mobile agents can parse."
  },
  {
    "id": 11,
    "questionText": "Which best matches Kerckhoffs’s principle?",
    "options": [
      "Keep the algorithm secret",
      "Keep both design and key secret",
      "Security should depend on the key, not hidden design",
      "A system is secure if attackers cannot inspect it"
    ],
    "correctAnswers": [
      2
    ],
    "type": "mcq",
    "category": "Week 04: Cryptography Basics & Entropy",
    "explanation": "Correct answer is: Security should depend on the key, not hidden design. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 12,
    "questionText": "Which statement about entropy is correct?",
    "options": [
      "Long key always means high entropy",
      "Entropy measures unpredictability/distribution",
      "Entropy depends on how random it looks to humans",
      "Entropy is irrelevant for cryptography"
    ],
    "correctAnswers": [
      1
    ],
    "type": "mcq",
    "category": "Week 04: Cryptography Basics & Entropy",
    "explanation": "Correct answer is: Entropy measures unpredictability/distribution. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 13,
    "questionText": "Which is the strongest source for cryptographic key generation?",
    "options": [
      "Student ID and date",
      "Programmer’s favourite phrase",
      "OS entropy pool from hardware/timing noise",
      "Username plus current year"
    ],
    "correctAnswers": [
      2
    ],
    "type": "mcq",
    "category": "Week 04: Cryptography Basics & Entropy",
    "explanation": "Correct answer is: OS entropy pool from hardware/timing noise. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 14,
    "questionText": "Which statement about symmetric encryption is correct?",
    "options": [
      "Same secret key is used for encryption and decryption",
      "Public key encrypts and private key decrypts",
      "It mainly provides non-repudiation",
      "Anyone can verify the sender publicly"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 04: Cryptography Basics & Entropy",
    "explanation": "Symmetric encryption relies on a single shared secret key for both encrypting the plaintext and decrypting the ciphertext."
  },
  {
    "id": 15,
    "questionText": "Why is a one-time pad impractical?",
    "options": [
      "XOR cannot decrypt",
      "It only works on numbers",
      "Key must be random, message-length, secret, and never reused",
      "It is weaker than Caesar cipher"
    ],
    "correctAnswers": [
      2
    ],
    "type": "mcq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: Key must be random, message-length, secret, and never reused. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 16,
    "questionText": "What does perfect secrecy mean?",
    "options": [
      "The attacker can decrypt only with enough time",
      "Ciphertext does not change the attacker’s belief about plaintext",
      "AES always gives perfect secrecy",
      "Hashing the message hides it perfectly"
    ],
    "correctAnswers": [
      1
    ],
    "type": "mcq",
    "category": "Week 05: Block Ciphers & MACs",
    "explanation": "Correct answer is: Ciphertext does not change the attacker’s belief about plaintext. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 17,
    "questionText": "If only 20 bits of a 256-bit key are unpredictable, what is the real security level?",
    "options": [
      "256 bits",
      "128 bits",
      "About 20 bits",
      "0 bits automatically"
    ],
    "correctAnswers": [
      2
    ],
    "type": "mcq",
    "category": "Week 05: Block Ciphers & MACs",
    "explanation": "Correct answer is: About 20 bits. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 18,
    "questionText": "Which hash property means same input gives same digest?",
    "options": [
      "Avalanche effect",
      "Determinism",
      "Non-repudiation",
      "Forward secrecy"
    ],
    "correctAnswers": [
      1
    ],
    "type": "mcq",
    "category": "Week 04: Cryptography Basics & Entropy",
    "explanation": "Correct answer is: Determinism. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 19,
    "questionText": "Which hash property means a small input change causes a very different digest?",
    "options": [
      "Salt",
      "Avalanche effect",
      "Key exchange",
      "Symmetric encryption"
    ],
    "correctAnswers": [
      1
    ],
    "type": "mcq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: Avalanche effect. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 20,
    "questionText": "Why is message || SHA256(message) not authentication?",
    "options": [
      "SHA-256 cannot hash text",
      "Anyone can modify the message and recompute the hash",
      "Hashes always reveal plaintext",
      "It provides too much confidentiality"
    ],
    "correctAnswers": [
      1
    ],
    "type": "mcq",
    "category": "Week 07: Web & Auth Attacks",
    "explanation": "Correct answer is: Anyone can modify the message and recompute the hash. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 21,
    "questionText": "Which design is encrypt-then-MAC?",
    "options": [
      "Enc(M || MAC(M))",
      "Enc(M) || MAC(Enc(M))",
      "Enc(M) || MAC(M)",
      "MAC(M) || M"
    ],
    "correctAnswers": [
      1
    ],
    "type": "mcq",
    "category": "Week 05: Block Ciphers & MACs",
    "explanation": "Correct answer is: Enc(M) || MAC(Enc(M)). This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 22,
    "questionText": "Which mode leaks repeated plaintext block patterns?",
    "options": [
      "ECB",
      "CBC with random IV",
      "GCM with nonce",
      "ChaCha20 with unique nonce"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 05: Block Ciphers & MACs",
    "explanation": "Correct answer is: ECB. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 23,
    "questionText": "In XOR encryption, to change encrypted '4' into encrypted '9', what should attacker XOR into ciphertext?",
    "options": [
      "00001101",
      "00001000",
      "00000101",
      "Impossible without key"
    ],
    "correctAnswers": [
      2
    ],
    "type": "mcq",
    "category": "Week 04: Cryptography Basics & Entropy",
    "explanation": "Correct answer is: 00000101. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 24,
    "questionText": "What attack affects naive H(K || M) MACs for iterative hashes?",
    "options": [
      "Replay only",
      "Length extension",
      "SQL injection",
      "Side-channel timing only"
    ],
    "correctAnswers": [
      1
    ],
    "type": "mcq",
    "category": "Week 05: Block Ciphers & MACs",
    "explanation": "Correct answer is: Length extension. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 25,
    "questionText": "What is a replay attack?",
    "options": [
      "Changing bits inside ciphertext",
      "Sending an old valid message/tag again",
      "Brute forcing a password offline",
      "Generating two colliding hashes"
    ],
    "correctAnswers": [
      1
    ],
    "type": "mcq",
    "category": "Week 05: Block Ciphers & MACs",
    "explanation": "Correct answer is: Sending an old valid message/tag again. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 26,
    "questionText": "What does Diffie-Hellman mainly provide?",
    "options": [
      "Key agreement",
      "File compression",
      "Password hashing",
      "Public logging"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 05-06: Key Exchange & DH",
    "explanation": "Correct answer is: Key agreement. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 27,
    "questionText": "In Diffie-Hellman, what is hard for large safe parameters?",
    "options": [
      "Computing g^x mod p",
      "Recovering x from g^x mod p",
      "Sending public values",
      "Comparing two integers"
    ],
    "correctAnswers": [
      1
    ],
    "type": "mcq",
    "category": "Week 05-06: Key Exchange & DH",
    "explanation": "Correct answer is: Recovering x from g^x mod p. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 28,
    "questionText": "What is forward secrecy?",
    "options": [
      "Same session key reused forever",
      "Old sessions remain safe even if long-term key is stolen later",
      "Password is stored in plaintext",
      "Public key is hidden from attackers"
    ],
    "correctAnswers": [
      1
    ],
    "type": "mcq",
    "category": "Week 05-06: Key Exchange & DH",
    "explanation": "Correct answer is: Old sessions remain safe even if long-term key is stolen later. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 29,
    "questionText": "Why is plain Diffie-Hellman vulnerable to MITM?",
    "options": [
      "It sends the shared secret directly",
      "It cannot work on public channels",
      "It does not authenticate public values by itself",
      "It requires both users to share private exponents"
    ],
    "correctAnswers": [
      2
    ],
    "type": "mcq",
    "category": "Week 05-06: Key Exchange & DH",
    "explanation": "Correct answer is: It does not authenticate public values by itself. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 30,
    "questionText": "What is the purpose of a TLS server certificate?",
    "options": [
      "Compress traffic",
      "Bind server identity to a public key",
      "Hide server IP",
      "Stop all SQL injection"
    ],
    "correctAnswers": [
      1
    ],
    "type": "mcq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: Bind server identity to a public key. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 31,
    "questionText": "Which statement about digital signatures is correct?",
    "options": [
      "Sign with public key, verify with private key",
      "Sign with private key, verify with public key",
      "They require a shared secret",
      "They only provide confidentiality"
    ],
    "correctAnswers": [
      1
    ],
    "type": "mcq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: Sign with private key, verify with public key. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 32,
    "questionText": "Compared with MACs, digital signatures can provide:",
    "options": [
      "Non-repudiation",
      "Faster symmetric encryption",
      "Password salting",
      "Packet ordering"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: Non-repudiation. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 33,
    "questionText": "Which statement best describes TCP?",
    "options": [
      "Connectionless and no ordering guarantee",
      "Reliable ordered byte stream",
      "Always encrypted",
      "No retransmissions"
    ],
    "correctAnswers": [
      1
    ],
    "type": "mcq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: Reliable ordered byte stream. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 34,
    "questionText": "Which statement best describes UDP?",
    "options": [
      "Reliable ordered byte stream",
      "Requires a three-way handshake",
      "Connectionless and no delivery/order guarantee",
      "Always encrypts payload"
    ],
    "correctAnswers": [
      2
    ],
    "type": "mcq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: Connectionless and no delivery/order guarantee. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 35,
    "questionText": "What was the core Heartbleed bug?",
    "options": [
      "OTP key reuse",
      "Missing bounds check on heartbeat length",
      "SQL string concatenation",
      "Expired certificate accepted"
    ],
    "correctAnswers": [
      1
    ],
    "type": "mcq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: Missing bounds check on heartbeat length. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 36,
    "questionText": "Identification means:",
    "options": [
      "Proving the claimed identity",
      "Claiming who you are",
      "Encrypting a database",
      "Deleting stale data"
    ],
    "correctAnswers": [
      1
    ],
    "type": "mcq",
    "category": "Week 07: Web & Auth Attacks",
    "explanation": "Correct answer is: Claiming who you are. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 37,
    "questionText": "Authentication means:",
    "options": [
      "Proving the claimed identity",
      "Choosing a username only",
      "Hashing all files",
      "Hiding IP address"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 07: Web & Auth Attacks",
    "explanation": "Correct answer is: Proving the claimed identity. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 38,
    "questionText": "Which is “something you know”?",
    "options": [
      "Smart card",
      "Fingerprint",
      "Password/PIN",
      "Face scan"
    ],
    "correctAnswers": [
      2
    ],
    "type": "mcq",
    "category": "Week 07: Web & Auth Attacks",
    "explanation": "Correct answer is: Password/PIN. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 39,
    "questionText": "Which is “something you have”?",
    "options": [
      "Password",
      "Smart card/phone",
      "Fingerprint",
      "Typing style only"
    ],
    "correctAnswers": [
      1
    ],
    "type": "mcq",
    "category": "Week 07: Web & Auth Attacks",
    "explanation": "Correct answer is: Smart card/phone. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 40,
    "questionText": "What is the main purpose of password salt?",
    "options": [
      "Make login faster",
      "Make same password produce different hashes",
      "Encrypt network traffic",
      "Replace authentication"
    ],
    "correctAnswers": [
      1
    ],
    "type": "mcq",
    "category": "Week 07: Web & Auth Attacks",
    "explanation": "Correct answer is: Make same password produce different hashes. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 41,
    "questionText": "Which is a good SQL injection defense?",
    "options": [
      "Prepared statements",
      "Hide login page URL",
      "Use MD5 passwords",
      "Use UDP for DB queries"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 08: Password Storage & SQLi",
    "explanation": "Correct answer is: Prepared statements. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 42,
    "questionText": "Why do biometric systems use fuzzy matching?",
    "options": [
      "Same person’s scan can vary slightly",
      "Biometrics are always exact strings",
      "It stores passwords in plaintext",
      "It removes spoofing risk completely"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 07: Web & Auth Attacks",
    "explanation": "Correct answer is: Same person’s scan can vary slightly. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 43,
    "questionText": "What is an inference attack?",
    "options": [
      "Learning hidden data through many allowed queries",
      "Crashing a server with packets",
      "Reusing an OTP key",
      "Forging a digital certificate"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 08: Password Storage & SQLi",
    "explanation": "Correct answer is: Learning hidden data through many allowed queries. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 44,
    "questionText": "What is XSS?",
    "options": [
      "Injecting malicious script into trusted pages",
      "Injecting SQL into database query",
      "Breaking Diffie-Hellman math",
      "Changing TLS certificates"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 07: Web & Auth Attacks",
    "explanation": "Correct answer is: Injecting malicious script into trusted pages. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 45,
    "questionText": "What is DoS?",
    "options": [
      "Making service unavailable to legitimate users",
      "Encrypting a file with AES",
      "Signing a message",
      "Adding salt to a password"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 07: Web & Auth Attacks",
    "explanation": "Correct answer is: Making service unavailable to legitimate users. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 46,
    "questionText": "What is DDoS?",
    "options": [
      "DoS from distributed sources/botnet",
      "Single local crash only",
      "Database inference only",
      "Password guessing only"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 07: Web & Auth Attacks",
    "explanation": "Correct answer is: DoS from distributed sources/botnet. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 47,
    "questionText": "What is an amplification attack?",
    "options": [
      "Small request triggers larger response toward victim",
      "Hash output becomes longer",
      "Password becomes more random",
      "TLS certificate becomes invalid"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 07: Web & Auth Attacks",
    "explanation": "An amplification attack relies on protocols that return large packets in response to small requests (e.g. DNS, NTP) to flood a spoofed victim's IP."
  },
  {
    "id": 48,
    "questionText": "Which is a practical DDoS defense?",
    "options": [
      "Rate limiting and traffic scrubbing",
      "Reusing OTP keys",
      "Disabling all logging",
      "Storing plaintext passwords"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 07: Web & Auth Attacks",
    "explanation": "Correct answer is: Rate limiting and traffic scrubbing. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 49,
    "questionText": "Cloud security uses which idea?",
    "options": [
      "Provider handles everything",
      "Customer handles everything",
      "Shared responsibility",
      "No responsibility due to automation"
    ],
    "correctAnswers": [
      2
    ],
    "type": "mcq",
    "category": "Week 08: Password Storage & SQLi",
    "explanation": "Correct answer is: Shared responsibility. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 50,
    "questionText": "Which is application-level cloud encryption?",
    "options": [
      "Whole disk encrypted by storage layer only",
      "App encrypts data before saving/sending",
      "Network card compresses packets",
      "Firewall blocks all users"
    ],
    "correctAnswers": [
      1
    ],
    "type": "mcq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: App encrypts data before saving/sending. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 51,
    "questionText": "What is data retention?",
    "options": [
      "Keeping data forever",
      "Keeping data only as long as needed/required",
      "Publishing logs publicly",
      "Disabling backups"
    ],
    "correctAnswers": [
      1
    ],
    "type": "mcq",
    "category": "Week 08: Password Storage & SQLi",
    "explanation": "Correct answer is: Keeping data only as long as needed/required. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 52,
    "questionText": "What is crypto-shredding?",
    "options": [
      "Breaking a hash collision",
      "Deleting encryption keys so encrypted data becomes unreadable",
      "Compressing encrypted data",
      "Reusing a nonce"
    ],
    "correctAnswers": [
      1
    ],
    "type": "mcq",
    "category": "Week 08: Password Storage & SQLi",
    "explanation": "Correct answer is: Deleting encryption keys so encrypted data becomes unreadable. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 53,
    "questionText": "A trusted shared computer can be modelled as:",
    "options": [
      "State + action → new state",
      "Password + salt → username",
      "Ciphertext + hash → plaintext",
      "UI tree + pixels → APK"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: State + action → new state. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 54,
    "questionText": "In Raft, the leader mainly:",
    "options": [
      "Decides log order and replicates entries",
      "Lets every client directly edit all logs",
      "Removes need for consensus",
      "Encrypts all network traffic"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 09: Consensus & Blockchain",
    "explanation": "Correct answer is: Decides log order and replicates entries. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 55,
    "questionText": "Why is “one identity = one vote” hard in permissionless systems?",
    "options": [
      "Identities are always trusted",
      "Attackers can create many identities",
      "TCP prevents voting",
      "Hash functions cannot count votes"
    ],
    "correctAnswers": [
      1
    ],
    "type": "mcq",
    "category": "Week 09: Consensus & Blockchain",
    "explanation": "Correct answer is: Attackers can create many identities. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 56,
    "questionText": "In Proof of Work, solving is:",
    "options": [
      "Cheap and centrally assigned",
      "Costly, but verification is easy",
      "Impossible to verify",
      "Based on usernames"
    ],
    "correctAnswers": [
      1
    ],
    "type": "mcq",
    "category": "Week 09: Consensus & Blockchain",
    "explanation": "Correct answer is: Costly, but verification is easy. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 57,
    "questionText": "What does the longest-chain/most-work rule help with?",
    "options": [
      "Network convergence after forks",
      "SQL injection prevention",
      "Password salting",
      "Android sandboxing"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 09: Consensus & Blockchain",
    "explanation": "Correct answer is: Network convergence after forks. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 58,
    "questionText": "What is an eclipse attack?",
    "options": [
      "Isolating a node’s network view through attacker-controlled peers",
      "Stealing password salt",
      "Replacing AES with DES",
      "Running static analysis"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 09: Consensus & Blockchain",
    "explanation": "Correct answer is: Isolating a node’s network view through attacker-controlled peers. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 59,
    "questionText": "What is selfish mining?",
    "options": [
      "Withholding blocks and releasing strategically",
      "Using prepared statements",
      "Encrypting database rows",
      "Signing TLS certificates"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 09: Consensus & Blockchain",
    "explanation": "Correct answer is: Withholding blocks and releasing strategically. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 60,
    "questionText": "Rice’s theorem implies:",
    "options": [
      "Perfect automatic analysis of all non-trivial semantic program properties is impossible",
      "Static analysis is useless",
      "Fuzzing always finds all bugs",
      "Program analysis can never find bugs"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Perfect automatic analysis of all non-trivial semantic program properties is impossible. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 61,
    "questionText": "Which statements about the CIA triad are correct?",
    "options": [
      "Confidentiality means only authorised access",
      "Integrity means unauthorised changes are prevented",
      "Availability means systems never slow down",
      "Confidentiality and integrity are the same"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 01-02: Security Principles & Models",
    "explanation": "Correct answer is: Confidentiality means only authorised access AND Integrity means unauthorised changes are prevented. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 62,
    "questionText": "Which belong to a system model?",
    "options": [
      "Actors",
      "Components",
      "Attacker’s specific goal",
      "Attacker’s budget"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 01-02: Security Principles & Models",
    "explanation": "Correct answer is: Actors AND Components. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 63,
    "questionText": "Which belong to a threat model?",
    "options": [
      "Adversary capability",
      "Adversary type",
      "Website logo colour",
      "Lecture schedule"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 01-02: Security Principles & Models",
    "explanation": "Correct answer is: Adversary capability AND Adversary type. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 64,
    "questionText": "Which reduce hallucinated vulnerability reports?",
    "options": [
      "Ask for concrete proof/trace",
      "Ask for minimal reproducible example or PoC",
      "Treat first plausible claim as final",
      "Avoid validation"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Ask for concrete proof/trace AND Ask for minimal reproducible example or PoC. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 65,
    "questionText": "Which reduce missed AI-assisted vulnerabilities?",
    "options": [
      "Run multiple analyses",
      "Vary prompt/model/temperature",
      "Stop after first issue",
      "Assume one long run covers all paths"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Run multiple analyses AND Vary prompt/model/temperature. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 66,
    "questionText": "Which Android exposure statements are correct?",
    "options": [
      "android:exported=\"false\" is safer for internal screens",
      "Launcher activity is commonly exported",
      "Any intent use is automatically insecure",
      "Sensitive screens can skip auth if caller seems trusted"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 03: LLMs & Android Security",
    "explanation": "Correct answer is: android:exported=\"false\" is safer for internal screens AND Launcher activity is commonly exported. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 67,
    "questionText": "Which deep link statements are correct?",
    "options": [
      "Manifest intent filters match incoming URLs",
      "Unvalidated parameters can affect app behaviour",
      "BROWSABLE means only vendor website can open it",
      "Deep links are always harmless"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 03: LLMs & Android Security",
    "explanation": "Correct answer is: Manifest intent filters match incoming URLs AND Unvalidated parameters can affect app behaviour. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 68,
    "questionText": "Which disclosure practices are appropriate?",
    "options": [
      "Report privately through proper channel",
      "Confirm you are contacting the right person/channel",
      "Publish full exploit before contacting vendor",
      "Exploit production system to maximise impact"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 03: LLMs & Android Security",
    "explanation": "Correct answer is: Report privately through proper channel AND Confirm you are contacting the right person/channel. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 69,
    "questionText": "A 32-bit key has only 16 unpredictable bits. Which are correct?",
    "options": [
      "Real entropy is 16 bits",
      "Worst-case brute force may be about 2^16",
      "It equals a uniform 32-bit key",
      "It has 32 bits of entropy"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Real entropy is 16 bits AND Worst-case brute force may be about 2^16. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 70,
    "questionText": "Which hash statements are correct?",
    "options": [
      "Same input always gives same digest",
      "Small input change can greatly change digest",
      "Collision resistance means collisions cannot exist",
      "MD5/SHA-1 are modern secure defaults"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 04: Cryptography Basics & Entropy",
    "explanation": "Correct answer is: Same input always gives same digest AND Small input change can greatly change digest. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 71,
    "questionText": "Which OTP statements are correct?",
    "options": [
      "Reusing OTP key leaks information: C1 xor C2 = M1 xor M2",
      "OTP needs random secret key never reused",
      "OTP remains secure after many reuses",
      "OTP solves key distribution overhead"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 04: Cryptography Basics & Entropy",
    "explanation": "Correct answer is: Reusing OTP key leaks information: C1 xor C2 = M1 xor M2 AND OTP needs random secret key never reused. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 72,
    "questionText": "Which PRG/stream cipher statements are correct?",
    "options": [
      "PRG stretches short seed into longer pseudorandom output",
      "PRG security is against efficient distinguishers",
      "Same seed must produce different output every time",
      "Stream ciphers never need synchronisation"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 04: Cryptography Basics & Entropy",
    "explanation": "Correct answer is: PRG stretches short seed into longer pseudorandom output AND PRG security is against efficient distinguishers. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 73,
    "questionText": "OTP uses M=010010101, K=110001011. Which are correct?",
    "options": [
      "Ciphertext is 100011110",
      "Decrypting 100011110 with same key gives 010010101",
      "Ciphertext is 100111110",
      "Decryption requires public/private key pair"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 04: Cryptography Basics & Entropy",
    "explanation": "Correct answer is: Ciphertext is 100011110 AND Decrypting 100011110 with same key gives 010010101. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 74,
    "questionText": "Which replay statements are correct?",
    "options": [
      "Re-sending old valid (ciphertext, tag) is replay",
      "MAC alone does not guarantee freshness",
      "Replay is impossible if tag is valid",
      "Replay only matters after confidentiality fails"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 05: Block Ciphers & MACs",
    "explanation": "Correct answer is: Re-sending old valid (ciphertext, tag) is replay AND MAC alone does not guarantee freshness. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 75,
    "questionText": "Which ECB statements are correct?",
    "options": [
      "Identical plaintext blocks give identical ciphertext blocks under same key",
      "Swapping ciphertext blocks swaps plaintext blocks after decryption",
      "ECB hides repetition well",
      "ECB automatically detects tampering"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 05: Block Ciphers & MACs",
    "explanation": "Correct answer is: Identical plaintext blocks give identical ciphertext blocks under same key AND Swapping ciphertext blocks swaps plaintext blocks after decryption. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 76,
    "questionText": "Which encrypt-then-MAC statements are correct?",
    "options": [
      "Receiver can reject modified ciphertext before decryption",
      "MAC is computed over ciphertext",
      "Order never matters if AES is used",
      "MAC-then-encrypt always rejects before decryption"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 05: Block Ciphers & MACs",
    "explanation": "Correct answer is: Receiver can reject modified ciphertext before decryption AND MAC is computed over ciphertext. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 77,
    "questionText": "Which hash/MAC statements are correct?",
    "options": [
      "MAC uses shared secret key",
      "Unkeyed hash alone cannot stop active forger who recomputes hash",
      "Anyone can verify MAC without secret",
      "HMAC is just SHA256(message) twice"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 05: Block Ciphers & MACs",
    "explanation": "Correct answer is: MAC uses shared secret key AND Unkeyed hash alone cannot stop active forger who recomputes hash. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 78,
    "questionText": "Which key-generation statements are correct?",
    "options": [
      "Use crypto API backed by entropy sources",
      "Timestamp-only seed can be predictable",
      "Human-looking randomness is sufficient",
      "Output length alone guarantees security"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Use crypto API backed by entropy sources AND Timestamp-only seed can be predictable. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 79,
    "questionText": "Which Diffie-Hellman statements are correct?",
    "options": [
      "Public values can be sent openly",
      "It lets two parties derive a shared secret over a public channel",
      "Shared secret must be sent directly",
      "DH alone proves peer identity"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 05-06: Key Exchange & DH",
    "explanation": "Correct answer is: Public values can be sent openly AND It lets two parties derive a shared secret over a public channel. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 80,
    "questionText": "Which DH formula statements are correct?",
    "options": [
      "kA = kB = g^(ab) mod p",
      "Recovering a from A=g^a mod p is discrete log",
      "Anyone can compute key as A*B mod p",
      "Alice and Bob exchange private a and b"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: kA = kB = g^(ab) mod p AND Recovering a from A=g^a mod p is discrete log. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 81,
    "questionText": "Which key agreement/transport statements are correct?",
    "options": [
      "DH jointly derives the key",
      "PKE key transport lets one side encrypt a chosen key to receiver’s public key",
      "DH sends key directly",
      "DH and PKE transport are identical"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 05-06: Key Exchange & DH",
    "explanation": "Correct answer is: DH jointly derives the key AND PKE key transport lets one side encrypt a chosen key to receiver’s public key. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 82,
    "questionText": "Which forward secrecy statements are correct?",
    "options": [
      "Ephemeral DH helps provide forward secrecy",
      "Without forward secrecy, stolen long-term key may expose old sessions",
      "Forward secrecy replaces authentication",
      "Forward secrecy means reuse same session key"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 05-06: Key Exchange & DH",
    "explanation": "Correct answer is: Ephemeral DH helps provide forward secrecy AND Without forward secrecy, stolen long-term key may expose old sessions. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 83,
    "questionText": "Which digital signature/MAC statements are correct?",
    "options": [
      "Signature is created using private key",
      "Signatures can support non-repudiation",
      "MAC verification key is public",
      "Signatures mainly provide confidentiality"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 05: Block Ciphers & MACs",
    "explanation": "Correct answer is: Signature is created using private key AND Signatures can support non-repudiation. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 84,
    "questionText": "Which IP/UDP statements are correct?",
    "options": [
      "UDP destination port helps deliver data to right app",
      "IP packets may be lost/duplicated/out of order",
      "UDP retransmits lost datagrams automatically",
      "UDP guarantees ordering"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: UDP destination port helps deliver data to right app AND IP packets may be lost/duplicated/out of order. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 85,
    "questionText": "Which TCP statements are correct?",
    "options": [
      "TCP provides reliable ordered byte stream",
      "TCP uses acknowledgements/retransmissions",
      "TCP is always encrypted",
      "TCP is connectionless like UDP"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: TCP provides reliable ordered byte stream AND TCP uses acknowledgements/retransmissions. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 86,
    "questionText": "An LLM reports an Android admin screen is externally reachable. What are the best next checks?",
    "options": [
      "Inspect manifest for exported activity/deep link rules",
      "Build a safe reproducible trace showing external launch and missing auth",
      "Immediately publish exploit details",
      "Assume LLM is correct because it sounds technical",
      "Ignore because decompilers are never useful"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 03: LLMs & Android Security",
    "explanation": "Correct answer is: Inspect manifest for exported activity/deep link rules AND Build a safe reproducible trace showing external launch and missing auth. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 87,
    "questionText": "A reset token is SHA256(username || current_minute || 4_digit_code). Which are correct?",
    "options": [
      "Effective entropy may be low despite 256-bit digest",
      "Attacker can brute force likely minutes and 4-digit codes",
      "SHA-256 output length alone makes it secure",
      "Hashing automatically adds secret randomness",
      "It gives forward secrecy"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Effective entropy may be low despite 256-bit digest AND Attacker can brute force likely minutes and 4-digit codes. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 88,
    "questionText": "A protocol sends Enc(M) || MAC(M) and checks MAC after decryption. Which changes match EtM?",
    "options": [
      "MAC the ciphertext",
      "Verify tag before decryption",
      "MAC plaintext only after decryption",
      "Reuse same key for encryption and MAC",
      "Remove MAC because encryption provides integrity"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 05: Block Ciphers & MACs",
    "explanation": "Correct answer is: MAC the ciphertext AND Verify tag before decryption. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 89,
    "questionText": "In authenticated ECDHE, what prevents attacker replacing server’s DH value?",
    "options": [
      "Server signs/binds ephemeral DH value to authenticated identity",
      "Client verifies certificate chain/identity",
      "UDP checksum",
      "ECB mode",
      "Password salt"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: Server signs/binds ephemeral DH value to authenticated identity AND Client verifies certificate chain/identity. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 90,
    "questionText": "Static analyzer reports a bug that turns out impossible; fuzzer finds nothing. Which are correct?",
    "options": [
      "Static analysis may produce false positives",
      "Fuzzing may miss bugs due to coverage gaps",
      "Static analysis proving one false positive means all reports are useless",
      "Fuzzing finding nothing proves program is secure",
      "Rice’s theorem says never analyze programs"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Static analysis may produce false positives AND Fuzzing may miss bugs due to coverage gaps. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 91,
    "questionText": "Which Android/deep link statements are correct?",
    "options": [
      "Internal-only activities are safer with exported=false",
      "BROWSABLE allows opening from browser/external link contexts",
      "BROWSABLE guarantees the link is from trusted vendor site",
      "Deep links automatically perform authentication",
      "Manifest has no security meaning"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 03: LLMs & Android Security",
    "explanation": "Correct answer is: Internal-only activities are safer with exported=false AND BROWSABLE allows opening from browser/external link contexts. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 92,
    "questionText": "Same XOR keystream used. C1=001111, C2=010010, known M1=101010. Which are correct?",
    "options": [
      "Keystream is 100101",
      "M2 = 110111",
      "OTP reuse is safe here",
      "Attacker needs private key",
      "C1 xor C2 reveals nothing useful"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 04: Cryptography Basics & Entropy",
    "explanation": "Correct answer is: Keystream is 100101 AND M2 = 110111. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 93,
    "questionText": "HTTPS is valid, but SQL is concatenated and comments render raw HTML. Which defenses directly address bugs?",
    "options": [
      "Prepared statements for SQL",
      "Output encoding/sanitisation for rendered comments",
      "More TLS certificates",
      "Use ECB encryption",
      "Disable password salts"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 08: Password Storage & SQLi",
    "explanation": "Correct answer is: Prepared statements for SQL AND Output encoding/sanitisation for rendered comments. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 94,
    "questionText": "Which consensus/DeFi statements are correct?",
    "options": [
      "PoW can make influence depend on costly work instead of trusted identity",
      "Slippage protection limits unacceptable AMM execution price movement",
      "One identity = one vote is enough in open permissionless systems",
      "Smart contracts require human intermediaries for every transaction",
      "Longest-chain rule prevents all attacks permanently"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 09: Consensus & Blockchain",
    "explanation": "Correct answer is: PoW can make influence depend on costly work instead of trusted identity AND Slippage protection limits unacceptable AMM execution price movement. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 95,
    "questionText": "Which security research statements are correct?",
    "options": [
      "AI-assisted findings need evidence such as tests/traces/code review",
      "If sensitive data appears unexpectedly, stop/minimise harm/report privately",
      "False positive means tool missed a real bug",
      "Responsible disclosure means public exploit first",
      "Good intentions automatically make testing legal"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: AI-assisted findings need evidence such as tests/traces/code review AND If sensitive data appears unexpectedly, stop/minimise harm/report privately. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 96,
    "questionText": "Which password storage design is strongest?",
    "options": [
      "Random per-user salt plus slow password hash such as Argon2id/bcrypt/scrypt",
      "Optional secret pepper stored separately from database",
      "Plain SHA-256(password) only",
      "Plaintext password for recovery",
      "Same global salt for everyone as full protection"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Random per-user salt plus slow password hash such as Argon2id/bcrypt/scrypt AND Optional secret pepper stored separately from database. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 97,
    "questionText": "A cloud bucket accidentally exposes private documents. Which are correct?",
    "options": [
      "This is a cloud misconfiguration risk",
      "Least privilege and regular audits help reduce this risk",
      "Encryption is useless in every cloud scenario",
      "Public buckets are always safe if URLs are long",
      "Cloud provider always takes full responsibility for customer settings"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: This is a cloud misconfiguration risk AND Least privilege and regular audits help reduce this risk. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 98,
    "questionText": "Which statements about amplification DoS are correct?",
    "options": [
      "Spoofed small requests can trigger larger responses toward a victim",
      "Reflectors unintentionally help multiply attack traffic",
      "It is prevented by OTP",
      "It only affects databases, never networks",
      "Auto-scaling always solves it without cost/risk"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 07: Web & Auth Attacks",
    "explanation": "Correct answer is: Spoofed small requests can trigger larger responses toward a victim AND Reflectors unintentionally help multiply attack traffic. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 99,
    "questionText": "Which program analysis method/risk pairs are correct?",
    "options": [
      "Static analysis — possible false positives",
      "Symbolic execution — path explosion",
      "Dynamic analysis — proves all paths safe",
      "Fuzzing — no coverage gaps",
      "AI-assisted analysis — formal guarantee of correctness"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Static analysis — possible false positives AND Symbolic execution — path explosion. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 100,
    "questionText": "Which responsible disclosure/legal statements are correct?",
    "options": [
      "Good intentions do not automatically make security testing legal",
      "Researchers should use private channels and minimise harm",
      "Publishing first is always safer",
      "Exploiting real users is acceptable for stronger evidence",
      "If system is vulnerable, permission is never needed"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 03: LLMs & Android Security",
    "explanation": "Correct answer is: Good intentions do not automatically make security testing legal AND Researchers should use private channels and minimise harm. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 101,
    "questionText": "What does the wooden barrel theory imply?",
    "options": [
      "Strongest control decides security",
      "Weakest point limits system security",
      "Encryption removes all risks",
      "Availability is irrelevant"
    ],
    "correctAnswers": [
      1
    ],
    "type": "mcq",
    "category": "Week 01-02: Security Principles & Models",
    "explanation": "Correct answer is: Weakest point limits system security. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 102,
    "questionText": "Which is a security lifecycle activity before deployment?",
    "options": [
      "Patch after breach",
      "Post-mortem",
      "Define goals and test design",
      "Disaster recovery"
    ],
    "correctAnswers": [
      2
    ],
    "type": "mcq",
    "category": "Week 01-02: Security Principles & Models",
    "explanation": "Correct answer is: Define goals and test design. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 103,
    "questionText": "Which CIA property is affected if an attacker deletes a website’s database?",
    "options": [
      "Availability",
      "Confidentiality only",
      "Non-repudiation",
      "Forward secrecy"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Availability. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 104,
    "questionText": "Which CIA property is affected if a grade is changed without permission?",
    "options": [
      "Availability",
      "Integrity",
      "Entropy",
      "Anonymity"
    ],
    "correctAnswers": [
      1
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Integrity. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 105,
    "questionText": "Which phrase best describes attack surface?",
    "options": [
      "The part attackers can see or interact with",
      "The encrypted backup size",
      "The number of developers",
      "The amount of RAM"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 01-02: Security Principles & Models",
    "explanation": "Correct answer is: The part attackers can see or interact with. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 106,
    "questionText": "Why can more availability increase security risk?",
    "options": [
      "It may expose more interfaces to attackers",
      "It always disables encryption",
      "It removes all monitoring",
      "It prevents patching forever"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: It may expose more interfaces to attackers. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 107,
    "questionText": "Why are threat models needed?",
    "options": [
      "To define attacker goals and capabilities",
      "To replace all testing",
      "To guarantee security",
      "To hide the algorithm"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 01-02: Security Principles & Models",
    "explanation": "Correct answer is: To define attacker goals and capabilities. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 108,
    "questionText": "Which is an example of an attacker capability?",
    "options": [
      "Physical access to ATM",
      "Website colour",
      "Lecture week number",
      "Assignment score"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: Physical access to ATM. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 109,
    "questionText": "Which is an example of defender capability?",
    "options": [
      "Secure hardware isolation",
      "Attacker motivation",
      "Botnet size",
      "Phishing email text"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: Secure hardware isolation. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 110,
    "questionText": "Which statement about LLMs is most accurate?",
    "options": [
      "They are truth engines",
      "They predict likely text patterns",
      "They cannot make mistakes",
      "They formally verify code"
    ],
    "correctAnswers": [
      1
    ],
    "type": "mcq",
    "category": "Week 03: LLMs & Android Security",
    "explanation": "Correct answer is: They predict likely text patterns. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 111,
    "questionText": "What is hallucination in AI-assisted security?",
    "options": [
      "A made-up or unsupported finding",
      "A verified exploit",
      "A hash collision",
      "A password salt"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: A made-up or unsupported finding. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 112,
    "questionText": "What should a researcher do with an LLM-generated vulnerability claim?",
    "options": [
      "Treat it as a hypothesis needing evidence",
      "Publish it immediately",
      "Assume it is true",
      "Ignore all AI findings"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 03: LLMs & Android Security",
    "explanation": "Correct answer is: Treat it as a hypothesis needing evidence. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 113,
    "questionText": "Why is source code easier for LLMs than machine code?",
    "options": [
      "It contains more human-readable semantic signals",
      "It is always encrypted",
      "It has no variables",
      "It is shorter than machine code always"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 05: Block Ciphers & MACs",
    "explanation": "Correct answer is: It contains more human-readable semantic signals. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 114,
    "questionText": "What is an APK mostly like structurally?",
    "options": [
      "A zip archive containing app resources and code",
      "A plain text password file",
      "A TLS certificate only",
      "A physical hardware chip"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 03: LLMs & Android Security",
    "explanation": "Correct answer is: A zip archive containing app resources and code. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 115,
    "questionText": "What does Android manifest define?",
    "options": [
      "App components, permissions, intent filters",
      "User passwords",
      "Blockchain difficulty",
      "Hash digest length"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 03: LLMs & Android Security",
    "explanation": "Correct answer is: App components, permissions, intent filters. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 116,
    "questionText": "What is an exported Android component?",
    "options": [
      "A component accessible from outside the app",
      "A deleted component",
      "A component encrypted with AES",
      "A component only visible to kernel"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 03: LLMs & Android Security",
    "explanation": "Correct answer is: A component accessible from outside the app. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 117,
    "questionText": "Why can exported activities be risky?",
    "options": [
      "They may allow external entry into sensitive screens",
      "They make APK impossible to install",
      "They remove all UI elements",
      "They block all intents"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: They may allow external entry into sensitive screens. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 118,
    "questionText": "What is an Android intent?",
    "options": [
      "A message requesting an app action/component",
      "A password hash",
      "A TLS nonce",
      "A blockchain block"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 03: LLMs & Android Security",
    "explanation": "Correct answer is: A message requesting an app action/component. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 119,
    "questionText": "What is a deep link?",
    "options": [
      "A URL that can open a specific app screen/action",
      "A password storage method",
      "A cloud backup policy",
      "A TCP retransmission"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 03: LLMs & Android Security",
    "explanation": "Correct answer is: A URL that can open a specific app screen/action. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 120,
    "questionText": "Why should deep link parameters be validated?",
    "options": [
      "They may be attacker-controlled inputs",
      "They are always encrypted",
      "They cannot affect app state",
      "They are never external"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 03: LLMs & Android Security",
    "explanation": "Correct answer is: They may be attacker-controlled inputs. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 121,
    "questionText": "Which is safest for an internal-only Android activity?",
    "options": [
      "android:exported=\"false\"",
      "Public deep link to admin page",
      "No authentication check",
      "Accept all intent extras"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 03: LLMs & Android Security",
    "explanation": "Correct answer is: android:exported=\"false\". This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 122,
    "questionText": "What does the runtime UI tree provide?",
    "options": [
      "Text, bounds, and clickability information",
      "The private signing key",
      "The database password",
      "The raw kernel memory"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 03: LLMs & Android Security",
    "explanation": "Correct answer is: Text, bounds, and clickability information. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 123,
    "questionText": "What is responsible disclosure?",
    "options": [
      "Privately reporting vulnerability through proper channel",
      "Posting exploit publicly first",
      "Exploiting real users",
      "Selling stolen credentials"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 03: LLMs & Android Security",
    "explanation": "Correct answer is: Privately reporting vulnerability through proper channel. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 124,
    "questionText": "What does Kerckhoffs’s principle reject?",
    "options": [
      "Security by hiding the algorithm",
      "Secret keys",
      "Public algorithms",
      "Cryptographic review"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 04: Cryptography Basics & Entropy",
    "explanation": "Correct answer is: Security by hiding the algorithm. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 125,
    "questionText": "What does entropy measure in keys?",
    "options": [
      "Unpredictability",
      "Visual complexity only",
      "File size",
      "Encryption speed"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 04: Cryptography Basics & Entropy",
    "explanation": "Correct answer is: Unpredictability. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 126,
    "questionText": "Which key has low entropy?",
    "options": [
      "password123 chosen by user",
      "Random 128-bit key from CSPRNG",
      "Hardware-generated key",
      "OS entropy pool output"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 04: Cryptography Basics & Entropy",
    "explanation": "Correct answer is: password123 chosen by user. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 127,
    "questionText": "Which is the best cryptographic randomness source?",
    "options": [
      "CSPRNG seeded from OS entropy",
      "Current date",
      "Student number",
      "Human pattern"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 04: Cryptography Basics & Entropy",
    "explanation": "Correct answer is: CSPRNG seeded from OS entropy. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 128,
    "questionText": "What is a PRG/PRNG used for?",
    "options": [
      "Expanding a short seed into longer pseudorandom output",
      "Compressing images",
      "Verifying certificates only",
      "Deleting logs"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 04: Cryptography Basics & Entropy",
    "explanation": "Correct answer is: Expanding a short seed into longer pseudorandom output. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 129,
    "questionText": "A secure stream cipher mainly needs:",
    "options": [
      "Unique nonce/keystream use",
      "Reused OTP key",
      "Public password",
      "Fixed IV forever"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 04: Cryptography Basics & Entropy",
    "explanation": "Correct answer is: Unique nonce/keystream use. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 130,
    "questionText": "What happens if stream cipher keystream is reused?",
    "options": [
      "XOR of ciphertexts leaks XOR of plaintexts",
      "It becomes more secure",
      "It prevents replay",
      "It authenticates messages"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 04: Cryptography Basics & Entropy",
    "explanation": "Correct answer is: XOR of ciphertexts leaks XOR of plaintexts. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 131,
    "questionText": "In XOR, 1 xor 1 equals:",
    "options": [
      "0",
      "1",
      "2",
      "Undefined"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 04: Cryptography Basics & Entropy",
    "explanation": "Correct answer is: 0. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 132,
    "questionText": "In XOR, 1 xor 0 equals:",
    "options": [
      "1",
      "0",
      "2",
      "10"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 04: Cryptography Basics & Entropy",
    "explanation": "Correct answer is: 1. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 133,
    "questionText": "What is the main OTP condition?",
    "options": [
      "Random key as long as message, used once",
      "Short fixed key reused",
      "Public key only",
      "No key required"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 04: Cryptography Basics & Entropy",
    "explanation": "Correct answer is: Random key as long as message, used once. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 134,
    "questionText": "Why is OTP perfectly secret theoretically?",
    "options": [
      "Every plaintext is equally possible given ciphertext",
      "It uses public key certificates",
      "It hashes the message twice",
      "It uses ECB mode"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: Every plaintext is equally possible given ciphertext. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 135,
    "questionText": "What does a hash digest represent?",
    "options": [
      "Fixed-size output from input data",
      "Secret decryption key",
      "Network port",
      "User identity proof"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 04: Cryptography Basics & Entropy",
    "explanation": "Correct answer is: Fixed-size output from input data. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 136,
    "questionText": "Which is a preimage-resistance idea?",
    "options": [
      "Hard to find input from given digest",
      "Same input gives same digest",
      "Decryption uses same key",
      "Server certificate expires"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 04: Cryptography Basics & Entropy",
    "explanation": "Correct answer is: Hard to find input from given digest. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 137,
    "questionText": "Which is collision resistance?",
    "options": [
      "Hard to find two different inputs with same digest",
      "Impossible for collisions to exist",
      "Encrypting two files with same key",
      "Preventing packet loss"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 04: Cryptography Basics & Entropy",
    "explanation": "Correct answer is: Hard to find two different inputs with same digest. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 138,
    "questionText": "Why are MD5 and SHA-1 weak today?",
    "options": [
      "Collision attacks exist/practical concerns",
      "They cannot output bits",
      "They are asymmetric ciphers",
      "They require public keys"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Collision attacks exist/practical concerns. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 139,
    "questionText": "What is a Merkle tree useful for?",
    "options": [
      "Verifying many items using one root digest",
      "Generating passwords",
      "Replacing TLS certificates",
      "Blocking SQL injection"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Verifying many items using one root digest. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 140,
    "questionText": "What does a MAC provide?",
    "options": [
      "Integrity/authenticity with shared secret key",
      "Public non-repudiation",
      "Compression",
      "Perfect secrecy always"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 05: Block Ciphers & MACs",
    "explanation": "Correct answer is: Integrity/authenticity with shared secret key. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 141,
    "questionText": "Why is unkeyed hash not enough for authentication?",
    "options": [
      "Attacker can recompute hash after modifying message",
      "Hashes are always random",
      "Hashes cannot detect changes",
      "Hashes require private key"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 07: Web & Auth Attacks",
    "explanation": "Correct answer is: Attacker can recompute hash after modifying message. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 142,
    "questionText": "What is HMAC?",
    "options": [
      "Keyed hash-based message authentication code",
      "Public key encryption scheme",
      "Password manager",
      "DoS tool"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 05: Block Ciphers & MACs",
    "explanation": "Correct answer is: Keyed hash-based message authentication code. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 143,
    "questionText": "Why is encrypt-then-MAC preferred?",
    "options": [
      "Tampered ciphertext can be rejected before decryption",
      "It removes need for keys",
      "It hides all metadata",
      "It is the same as ECB"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 05: Block Ciphers & MACs",
    "explanation": "Correct answer is: Tampered ciphertext can be rejected before decryption. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 144,
    "questionText": "What is nonce freshness used for?",
    "options": [
      "Prevent replay/reuse problems",
      "Increase file size",
      "Make hash deterministic",
      "Disable authentication"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Prevent replay/reuse problems. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 145,
    "questionText": "In ECB, identical plaintext blocks produce:",
    "options": [
      "Identical ciphertext blocks under same key",
      "Always random different blocks",
      "No ciphertext",
      "Public signatures"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: Identical ciphertext blocks under same key. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 146,
    "questionText": "Which mode should generally be avoided for structured data?",
    "options": [
      "ECB",
      "GCM",
      "CBC with random IV",
      "CTR with unique nonce"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: ECB. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 147,
    "questionText": "What is confidentiality missing from plain MAC?",
    "options": [
      "MAC does not hide message contents",
      "MAC cannot detect tampering",
      "MAC has no key",
      "MAC is public encryption"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 05: Block Ciphers & MACs",
    "explanation": "Correct answer is: MAC does not hide message contents. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 148,
    "questionText": "Diffie-Hellman solves which problem?",
    "options": [
      "Shared secret agreement over public channel",
      "SQL injection",
      "Password salting",
      "App sandboxing"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 05-06: Key Exchange & DH",
    "explanation": "Correct answer is: Shared secret agreement over public channel. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 149,
    "questionText": "In DH, Alice keeps which value secret?",
    "options": [
      "Private exponent",
      "Prime modulus",
      "Generator",
      "Public value"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Private exponent. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 150,
    "questionText": "What is a man-in-the-middle attack?",
    "options": [
      "Attacker secretly intercepts/changes communication between parties",
      "Attacker only reads local files",
      "Server updates certificate",
      "User changes password"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 05-06: Key Exchange & DH",
    "explanation": "Correct answer is: Attacker secretly intercepts/changes communication between parties. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 151,
    "questionText": "What prevents MITM in authenticated key exchange?",
    "options": [
      "Authentication of exchanged public values",
      "Using smaller keys",
      "Reusing same nonce",
      "Hiding algorithm name"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: Authentication of exchanged public values. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 152,
    "questionText": "What does a CA do in PKI?",
    "options": [
      "Signs certificates binding identities to public keys",
      "Stores plaintext passwords",
      "Runs TCP retransmission",
      "Mines blocks"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: Signs certificates binding identities to public keys. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 153,
    "questionText": "What does a browser check in HTTPS certificate validation?",
    "options": [
      "Chain to trusted CA and hostname validity",
      "User’s password salt",
      "Database schema",
      "Android UI tree"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: Chain to trusted CA and hostname validity. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 154,
    "questionText": "Which TLS property comes from encryption?",
    "options": [
      "Confidentiality of traffic",
      "Password recovery",
      "Database indexing",
      "Blockchain mining"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: Confidentiality of traffic. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 155,
    "questionText": "Which TLS property comes from MAC/AEAD integrity?",
    "options": [
      "Detecting tampering",
      "Hiding DNS forever",
      "Increasing entropy of passwords",
      "Preventing all XSS"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: Detecting tampering. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 156,
    "questionText": "Digital signatures use:",
    "options": [
      "Private key to sign, public key to verify",
      "Public key to sign, private key to verify",
      "Same shared secret for both parties only",
      "No key"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Private key to sign, public key to verify. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 157,
    "questionText": "What is non-repudiation?",
    "options": [
      "Signer cannot easily deny signing",
      "Message is hidden from everyone",
      "Server always online",
      "Password cannot be guessed"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Signer cannot easily deny signing. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 158,
    "questionText": "Which protocol provides reliable ordered byte stream?",
    "options": [
      "TCP",
      "UDP",
      "IP only",
      "ARP only"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: TCP. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 159,
    "questionText": "Which protocol is connectionless and lightweight?",
    "options": [
      "UDP",
      "TCP",
      "TLS only",
      "HTTPS only"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: UDP. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 160,
    "questionText": "Which layer does IP mainly provide?",
    "options": [
      "Best-effort packet delivery/addressing",
      "Password authentication",
      "Database access",
      "File hashing"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Best-effort packet delivery/addressing. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 161,
    "questionText": "What does a port number identify?",
    "options": [
      "Application/service endpoint on a host",
      "User’s fingerprint",
      "Hash collision",
      "TLS certificate issuer"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: Application/service endpoint on a host. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 162,
    "questionText": "Heartbleed leaked memory because of:",
    "options": [
      "Missing bounds check on claimed length",
      "Weak password salt",
      "SQL concatenation",
      "Blockchain fork"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: Missing bounds check on claimed length. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 163,
    "questionText": "What is identification?",
    "options": [
      "Claiming an identity",
      "Proving identity",
      "Granting permission",
      "Encrypting message"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 07: Web & Auth Attacks",
    "explanation": "Correct answer is: Claiming an identity. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 164,
    "questionText": "What is authorization?",
    "options": [
      "Deciding what an authenticated user can access",
      "Claiming username",
      "Hashing password",
      "Generating random nonce"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Deciding what an authenticated user can access. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 165,
    "questionText": "Which is biometric factor?",
    "options": [
      "Fingerprint",
      "Password",
      "Smart card",
      "OTP app token"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 07: Web & Auth Attacks",
    "explanation": "Correct answer is: Fingerprint. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 166,
    "questionText": "MFA is stronger mainly because:",
    "options": [
      "It combines independent factor types",
      "It makes passwords shorter",
      "It removes all phishing risk",
      "It uses only usernames"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 07: Web & Auth Attacks",
    "explanation": "Correct answer is: It combines independent factor types. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 167,
    "questionText": "What is offline password guessing?",
    "options": [
      "Attacker guesses locally after stealing hashes",
      "Attacker logs into live system each try",
      "User changes password",
      "Server sends OTP"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Attacker guesses locally after stealing hashes. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 168,
    "questionText": "Which slows offline password cracking?",
    "options": [
      "Slow password hashing function",
      "Fast unsalted MD5",
      "Plain SHA-1 only",
      "Plaintext storage"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Slow password hashing function. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 169,
    "questionText": "What is pepper in password storage?",
    "options": [
      "Secret value stored separately from password database",
      "Public per-user random value",
      "Username field",
      "TLS certificate"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 08: Password Storage & SQLi",
    "explanation": "Correct answer is: Secret value stored separately from password database. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 170,
    "questionText": "What does salt mainly defeat?",
    "options": [
      "Precomputed rainbow table reuse",
      "Network packet loss",
      "Android intent filters",
      "Diffie-Hellman MITM"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Precomputed rainbow table reuse. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 171,
    "questionText": "Which biometric error means attacker accepted as legitimate user?",
    "options": [
      "False accept",
      "False reject",
      "Hash collision",
      "Packet replay"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 07: Web & Auth Attacks",
    "explanation": "Correct answer is: False accept. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 172,
    "questionText": "Which biometric error means legitimate user rejected?",
    "options": [
      "False reject",
      "False accept",
      "Nonce reuse",
      "SQL injection"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 07: Web & Auth Attacks",
    "explanation": "Correct answer is: False reject. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 173,
    "questionText": "SQL injection happens when:",
    "options": [
      "User input becomes executable SQL logic",
      "SQL is encrypted",
      "Passwords are salted",
      "TLS fails certificate check"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 08: Password Storage & SQLi",
    "explanation": "Correct answer is: User input becomes executable SQL logic. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 174,
    "questionText": "XSS mainly targets:",
    "options": [
      "Browser/client-side script execution context",
      "DH exponent recovery",
      "Hash preimage",
      "TCP handshake only"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 07: Web & Auth Attacks",
    "explanation": "Correct answer is: Browser/client-side script execution context. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 175,
    "questionText": "Stored XSS means malicious script is:",
    "options": [
      "Saved and served later to users",
      "Only in URL once",
      "Only in RAM during TLS",
      "In blockchain nonce"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 07: Web & Auth Attacks",
    "explanation": "Correct answer is: Saved and served later to users. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 176,
    "questionText": "Reflected XSS means malicious input is:",
    "options": [
      "Reflected immediately in response",
      "Permanently stored",
      "Encrypted by OTP",
      "Converted to salt"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 07: Web & Auth Attacks",
    "explanation": "Correct answer is: Reflected immediately in response. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 177,
    "questionText": "CSRF abuses:",
    "options": [
      "Victim’s authenticated browser sending unwanted request",
      "Hash collision",
      "OTP secrecy",
      "Public key certificate expiry"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 08: Password Storage & SQLi",
    "explanation": "Correct answer is: Victim’s authenticated browser sending unwanted request. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 178,
    "questionText": "Which helps prevent CSRF?",
    "options": [
      "Unpredictable CSRF token/SameSite cookies",
      "ECB mode",
      "Public SQL queries",
      "Reused nonce"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 08: Password Storage & SQLi",
    "explanation": "Correct answer is: Unpredictable CSRF token/SameSite cookies. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 179,
    "questionText": "DoS attacks target:",
    "options": [
      "Availability",
      "Confidentiality only",
      "Non-repudiation only",
      "Password entropy only"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 07: Web & Auth Attacks",
    "explanation": "Correct answer is: Availability. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 180,
    "questionText": "Reflection DDoS uses:",
    "options": [
      "Third-party servers to send traffic to victim",
      "Only local keyboard input",
      "Password salting",
      "Static analysis"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 07: Web & Auth Attacks",
    "explanation": "Correct answer is: Third-party servers to send traffic to victim. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 181,
    "questionText": "Which cloud model gives customer most OS control?",
    "options": [
      "IaaS",
      "SaaS",
      "Fully managed email only",
      "CDN only"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: IaaS. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 182,
    "questionText": "Which cloud model gives provider more application control?",
    "options": [
      "SaaS",
      "Self-managed VM",
      "Bare-metal owned server",
      "Local laptop"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: SaaS. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 183,
    "questionText": "Disk-level encryption protects:",
    "options": [
      "Whole storage device/volume",
      "Only one app field before upload",
      "Only browser cookies",
      "Only SQL syntax"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Whole storage device/volume. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 184,
    "questionText": "Platform-level encryption means:",
    "options": [
      "Cloud platform encrypts before/at storage layer",
      "User manually encrypts in app only",
      "No key management exists",
      "Passwords are plaintext"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Cloud platform encrypts before/at storage layer. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 185,
    "questionText": "Key management is important because:",
    "options": [
      "Anyone with keys may decrypt protected data",
      "Keys are public by design always",
      "Encryption works without keys",
      "Deleted keys can always be recovered"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: Anyone with keys may decrypt protected data. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 186,
    "questionText": "Secure deletion in encrypted cloud storage can use:",
    "options": [
      "Destroying encryption keys",
      "Posting data publicly",
      "Reusing passwords",
      "Removing TLS"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: Destroying encryption keys. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 187,
    "questionText": "Data retention policy defines:",
    "options": [
      "How long data should be kept",
      "How fast TCP retransmits",
      "How many app screens exist",
      "How to mine blocks"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: How long data should be kept. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 188,
    "questionText": "Backups mainly support:",
    "options": [
      "Availability/recovery",
      "SQL injection",
      "Password entropy",
      "Deep links"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Availability/recovery. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 189,
    "questionText": "What is state machine replication?",
    "options": [
      "Replicas apply same ordered commands to reach same state",
      "Each server chooses random state",
      "Passwords are hashed twice",
      "Apps use exported activities"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 09: Consensus & Blockchain",
    "explanation": "Correct answer is: Replicas apply same ordered commands to reach same state. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 190,
    "questionText": "Raft elects:",
    "options": [
      "A leader",
      "A certificate authority",
      "A password salt",
      "A browser agent"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 09: Consensus & Blockchain",
    "explanation": "Correct answer is: A leader. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 191,
    "questionText": "In Raft, log replication requires agreement from:",
    "options": [
      "Majority/quorum",
      "One attacker",
      "Every internet user",
      "No followers"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 09: Consensus & Blockchain",
    "explanation": "Correct answer is: Majority/quorum. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 192,
    "questionText": "What is a Sybil attack?",
    "options": [
      "One attacker creates many identities",
      "One password has salt",
      "One packet is dropped",
      "One block is verified"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 09: Consensus & Blockchain",
    "explanation": "Correct answer is: One attacker creates many identities. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 193,
    "questionText": "Proof of Work helps resist Sybil attacks by requiring:",
    "options": [
      "Costly computation",
      "Real-name identity only",
      "Password reuse",
      "Central admin always"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 09: Consensus & Blockchain",
    "explanation": "Correct answer is: Costly computation. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 194,
    "questionText": "A blockchain fork is:",
    "options": [
      "Temporary split into competing chains",
      "SQL query error",
      "Password reset token",
      "TLS certificate chain"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 09: Consensus & Blockchain",
    "explanation": "Correct answer is: Temporary split into competing chains. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 195,
    "questionText": "Double spending means:",
    "options": [
      "Trying to spend same coin/value twice",
      "Hashing same file twice",
      "Using two-factor auth",
      "Sending two emails"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 09: Consensus & Blockchain",
    "explanation": "Correct answer is: Trying to spend same coin/value twice. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 196,
    "questionText": "A 51% attack means attacker controls:",
    "options": [
      "Majority mining power/stake influence",
      "51 passwords",
      "51 TLS certificates",
      "51 UI buttons"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Majority mining power/stake influence. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 197,
    "questionText": "Sandwich attack in DeFi exploits:",
    "options": [
      "Transaction ordering around victim trade",
      "Password reset email",
      "Android sandbox",
      "HMAC length extension"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 09: Consensus & Blockchain",
    "explanation": "Correct answer is: Transaction ordering around victim trade. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 198,
    "questionText": "Slippage tolerance limits:",
    "options": [
      "Maximum acceptable price movement during trade",
      "Password guesses per minute",
      "TLS certificate lifetime",
      "Number of app activities"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 09: Consensus & Blockchain",
    "explanation": "Correct answer is: Maximum acceptable price movement during trade. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 199,
    "questionText": "Static analysis examines code:",
    "options": [
      "Without running it",
      "Only after deployment",
      "Only through network packets",
      "Only inside blockchain"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Without running it. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 200,
    "questionText": "Dynamic analysis examines software:",
    "options": [
      "While running/executing",
      "Only from source text without execution",
      "By deleting keys",
      "By calculating entropy only"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: While running/executing. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 201,
    "questionText": "Fuzzing means:",
    "options": [
      "Feeding many generated/mutated inputs to find crashes/bugs",
      "Encrypting with public key",
      "Creating password salts",
      "Approving certificates"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Feeding many generated/mutated inputs to find crashes/bugs. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 202,
    "questionText": "Symbolic execution commonly suffers from:",
    "options": [
      "Path explosion",
      "Perfect completeness",
      "No constraints",
      "No branch analysis"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Path explosion. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 203,
    "questionText": "A false positive means:",
    "options": [
      "Tool reports bug but it is not real/exploitable",
      "Tool misses a real bug",
      "User enters wrong password",
      "Hash collision exists"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Tool reports bug but it is not real/exploitable. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 204,
    "questionText": "A false negative means:",
    "options": [
      "Tool misses a real bug",
      "Tool reports fake bug",
      "Password is correct",
      "User is authenticated"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Tool misses a real bug. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 205,
    "questionText": "Rice’s theorem concerns:",
    "options": [
      "Limits of deciding non-trivial semantic program properties",
      "Limits of TCP ports",
      "Limits of salt length only",
      "Limits of blockchain difficulty only"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Limits of deciding non-trivial semantic program properties. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 206,
    "questionText": "Which is least safe for vulnerability testing on real systems?",
    "options": [
      "Testing without permission on production users",
      "Using a local toy reproduction",
      "Reporting privately",
      "Minimising data access"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Testing without permission on production users. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 207,
    "questionText": "Which is best when sensitive data appears during testing?",
    "options": [
      "Stop, minimise access, report privately",
      "Download everything",
      "Publish screenshots",
      "Share with friends"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Stop, minimise access, report privately. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 208,
    "questionText": "What is least privilege?",
    "options": [
      "Give only permissions needed",
      "Give admin to everyone",
      "Disable authentication",
      "Reuse root password"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Give only permissions needed. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 209,
    "questionText": "Which principle limits damage after compromise?",
    "options": [
      "Least privilege",
      "Security by obscurity only",
      "Same password everywhere",
      "No logging"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Least privilege. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 210,
    "questionText": "Defense in depth means:",
    "options": [
      "Multiple layers of controls",
      "One perfect firewall",
      "No monitoring",
      "No patching"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Multiple layers of controls. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 211,
    "questionText": "What is patching?",
    "options": [
      "Updating software to fix vulnerabilities",
      "Removing all logs",
      "Reusing old keys",
      "Publishing secrets"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Updating software to fix vulnerabilities. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 212,
    "questionText": "Why is monitoring needed after deployment?",
    "options": [
      "Systems and attacks change over time",
      "Security is static forever",
      "It replaces authentication",
      "It makes passwords unnecessary"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Systems and attacks change over time. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 213,
    "questionText": "Which is a confidentiality breach?",
    "options": [
      "Leaked customer records",
      "Server reboot only",
      "Slow website only",
      "Valid backup restore"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 01-02: Security Principles & Models",
    "explanation": "Correct answer is: Leaked customer records. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 214,
    "questionText": "Which is an integrity breach?",
    "options": [
      "Attacker modifies bank balance",
      "Website gets high traffic",
      "User forgets password",
      "Disk encryption enabled"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 01-02: Security Principles & Models",
    "explanation": "Correct answer is: Attacker modifies bank balance. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 215,
    "questionText": "Which is an availability breach?",
    "options": [
      "Ransomware makes files unusable",
      "Hash output changes after input changes",
      "Salt is random",
      "Certificate is valid"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 01-02: Security Principles & Models",
    "explanation": "Correct answer is: Ransomware makes files unusable. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 216,
    "questionText": "Which is the safest way to handle secrets in code?",
    "options": [
      "Do not hard-code; use secure secret management",
      "Put API key in GitHub",
      "Email private key to all staff",
      "Store in public APK resources"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Do not hard-code; use secure secret management. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 217,
    "questionText": "What does authentication not automatically provide?",
    "options": [
      "Authorization",
      "Identity proof",
      "Login verification",
      "Credential checking"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 07: Web & Auth Attacks",
    "explanation": "Correct answer is: Authorization. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 218,
    "questionText": "Which is best for session tokens?",
    "options": [
      "Random, high-entropy, protected token",
      "Sequential user ID",
      "Current timestamp only",
      "Username in plaintext only"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Random, high-entropy, protected token. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 219,
    "questionText": "Why should session cookies use HttpOnly?",
    "options": [
      "Reduce JavaScript access to cookie",
      "Prevent all SQL injection",
      "Encrypt hard disk",
      "Mine blocks faster"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 08: Password Storage & SQLi",
    "explanation": "Correct answer is: Reduce JavaScript access to cookie. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 220,
    "questionText": "Why should cookies use Secure flag?",
    "options": [
      "Send only over HTTPS",
      "Store plaintext passwords",
      "Disable CSRF tokens",
      "Make hashes reversible"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 08: Password Storage & SQLi",
    "explanation": "Correct answer is: Send only over HTTPS. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 221,
    "questionText": "What does input validation do?",
    "options": [
      "Checks user input matches expected format/range",
      "Replaces encryption",
      "Guarantees no bugs ever",
      "Disables logging"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Checks user input matches expected format/range. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 222,
    "questionText": "What does output encoding do?",
    "options": [
      "Makes untrusted data safe in target output context",
      "Encrypts database keys",
      "Generates DH exponents",
      "Creates blockchain fork"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Makes untrusted data safe in target output context. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 223,
    "questionText": "Which is a safe SQL query pattern?",
    "options": [
      "Parameterized query",
      "String concatenation with raw input",
      "Escaping disabled",
      "Admin password in query"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 08: Password Storage & SQLi",
    "explanation": "Correct answer is: Parameterized query. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 224,
    "questionText": "What is rate limiting used for?",
    "options": [
      "Reduce abuse such as guessing/DoS",
      "Increase password reuse",
      "Remove TLS",
      "Disable backups"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 07: Web & Auth Attacks",
    "explanation": "Correct answer is: Reduce abuse such as guessing/DoS. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 225,
    "questionText": "What is logging useful for?",
    "options": [
      "Detection and investigation",
      "Storing plaintext passwords",
      "Publishing secrets",
      "Replacing access control"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Detection and investigation. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 226,
    "questionText": "What should logs avoid?",
    "options": [
      "Sensitive secrets/passwords/tokens",
      "Timestamps",
      "Event type",
      "Error categories"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Sensitive secrets/passwords/tokens. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 227,
    "questionText": "Which is a secure backup property?",
    "options": [
      "Tested restore process",
      "No access control",
      "Public bucket",
      "One copy only forever"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Tested restore process. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 228,
    "questionText": "What is ransomware mainly?",
    "options": [
      "Malware that encrypts/locks data for payment",
      "TLS certificate",
      "Password salt",
      "Merkle proof"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Malware that encrypts/locks data for payment. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 229,
    "questionText": "What is phishing mainly?",
    "options": [
      "Tricking users into revealing secrets or acting unsafely",
      "Hashing a file",
      "TCP retransmission",
      "Static analysis"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Tricking users into revealing secrets or acting unsafely. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 230,
    "questionText": "What is social engineering?",
    "options": [
      "Manipulating people to bypass security",
      "Breaking AES math",
      "Creating salts",
      "Running Raft election"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Manipulating people to bypass security. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 231,
    "questionText": "Which is safer for public Wi-Fi login?",
    "options": [
      "HTTPS with valid certificate",
      "HTTP with password",
      "Plaintext FTP",
      "Ignore certificate warning"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: HTTPS with valid certificate. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 232,
    "questionText": "What does certificate pinning try to reduce?",
    "options": [
      "Trusting unexpected certificates/CAs",
      "SQL injection",
      "Password reuse",
      "DoS reflection"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: Trusting unexpected certificates/CAs. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 233,
    "questionText": "What does revocation address in certificates?",
    "options": [
      "Certificates that should no longer be trusted",
      "Password salt length",
      "App UI layout",
      "Blockchain mempool"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: Certificates that should no longer be trusted. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 234,
    "questionText": "Why are nonces dangerous if reused in some modes?",
    "options": [
      "They can repeat keystream or break AEAD security",
      "They increase entropy",
      "They prevent replay automatically forever",
      "They make hashes non-deterministic"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: They can repeat keystream or break AEAD security. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 235,
    "questionText": "What is AEAD?",
    "options": [
      "Authenticated encryption with associated data",
      "Plain hash only",
      "Password-only login",
      "Android exported data"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 05: Block Ciphers & MACs",
    "explanation": "Correct answer is: Authenticated encryption with associated data. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 236,
    "questionText": "Associated data in AEAD is:",
    "options": [
      "Authenticated but not encrypted",
      "Encrypted but not authenticated",
      "Ignored completely",
      "Password salt only"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 05: Block Ciphers & MACs",
    "explanation": "Correct answer is: Authenticated but not encrypted. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 237,
    "questionText": "What is secure boot mainly for?",
    "options": [
      "Ensure only trusted software starts during boot",
      "Encrypt every email",
      "Prevent all XSS",
      "Replace user passwords"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Ensure only trusted software starts during boot. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 238,
    "questionText": "What is a side-channel attack?",
    "options": [
      "Uses leakage like timing/power/cache rather than direct algorithm break",
      "SQL injection only",
      "DDoS only",
      "Deep link only"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Uses leakage like timing/power/cache rather than direct algorithm break. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 239,
    "questionText": "Timing attack observes:",
    "options": [
      "Time differences to infer secrets",
      "Certificate issuer only",
      "UI colour",
      "Hash length only"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Time differences to infer secrets. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 240,
    "questionText": "Constant-time comparison helps protect against:",
    "options": [
      "Timing leaks in secret/tag comparison",
      "SQL injection",
      "Android exported activities",
      "DDoS reflection"
    ],
    "correctAnswers": [
      0
    ],
    "type": "mcq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Timing leaks in secret/tag comparison. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 241,
    "questionText": "Which statements about wooden barrel theory are correct?",
    "options": [
      "Security can fail through the weakest layer",
      "A system is only as strong as its weak critical component",
      "Strongest layer always decides security",
      "One lock is enough for modern systems"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 01-02: Security Principles & Models",
    "explanation": "Correct answer is: Security can fail through the weakest layer AND A system is only as strong as its weak critical component. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 242,
    "questionText": "Which are before-deployment security activities?",
    "options": [
      "Define security goals",
      "Test design/implementation",
      "Post-mortem after breach",
      "Ignore threat model"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Define security goals AND Test design/implementation. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 243,
    "questionText": "Which are after-deployment activities?",
    "options": [
      "Monitoring",
      "Detection and response",
      "Never patching",
      "Removing all logs"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Monitoring AND Detection and response. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 244,
    "questionText": "Which are after-incident activities?",
    "options": [
      "Post-mortem",
      "Patch and improve",
      "Skip root-cause analysis",
      "Delete evidence first"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Post-mortem AND Patch and improve. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 245,
    "questionText": "Which are confidentiality examples?",
    "options": [
      "Encrypting sensitive files",
      "Access control on private records",
      "Server uptime",
      "Packet retransmission"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 01-02: Security Principles & Models",
    "explanation": "Correct answer is: Encrypting sensitive files AND Access control on private records. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 246,
    "questionText": "Which are integrity examples?",
    "options": [
      "Detecting unauthorised message modification",
      "Preventing unauthorised database changes",
      "Public website loading quickly",
      "Password reset email delivery"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 01-02: Security Principles & Models",
    "explanation": "Correct answer is: Detecting unauthorised message modification AND Preventing unauthorised database changes. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 247,
    "questionText": "Which are availability examples?",
    "options": [
      "Redundant service design",
      "DDoS mitigation",
      "Secret key confidentiality",
      "Hash collision resistance"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 01-02: Security Principles & Models",
    "explanation": "Correct answer is: Redundant service design AND DDoS mitigation. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 248,
    "questionText": "Which are system-model elements?",
    "options": [
      "Actors",
      "Components and data flows",
      "Attacker budget",
      "Exploit payload"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Actors AND Components and data flows. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 249,
    "questionText": "Which are threat-model elements?",
    "options": [
      "Attacker capability",
      "Attacker goal",
      "Font style",
      "UI colour"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Attacker capability AND Attacker goal. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 250,
    "questionText": "Which statements about attack surface are correct?",
    "options": [
      "More exposed endpoints can increase risk",
      "Public APIs are part of attack surface",
      "Attack surface means only physical locks",
      "Reducing attack surface always means deleting data"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 01-02: Security Principles & Models",
    "explanation": "Correct answer is: More exposed endpoints can increase risk AND Public APIs are part of attack surface. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 251,
    "questionText": "Which statements about AI security analysis are correct?",
    "options": [
      "LLM findings need validation",
      "Prompt variation can reveal different issues",
      "One LLM answer is formal proof",
      "Hallucinations are impossible in code review"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: LLM findings need validation AND Prompt variation can reveal different issues. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 252,
    "questionText": "Which actions reduce hallucinated reports?",
    "options": [
      "Ask for exact trace",
      "Verify against code/runtime behaviour",
      "Accept plausible wording",
      "Avoid reproduction"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Ask for exact trace AND Verify against code/runtime behaviour. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 253,
    "questionText": "Which actions reduce missed vulnerabilities?",
    "options": [
      "Use multiple prompts/tools",
      "Explore different attack paths",
      "Stop after first result",
      "Never change assumptions"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Use multiple prompts/tools AND Explore different attack paths. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 254,
    "questionText": "Which decompilation statements are correct?",
    "options": [
      "Decompiled code may not match original source exactly",
      "Low-level code loses names/comments/structure",
      "APK always contains original source comments",
      "Decompilers are perfect"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 03: LLMs & Android Security",
    "explanation": "Correct answer is: Decompiled code may not match original source exactly AND Low-level code loses names/comments/structure. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 255,
    "questionText": "Which APK statements are correct?",
    "options": [
      "APK can contain classes.dex",
      "APK can contain manifest/resources",
      "APK cannot be unpacked",
      "Android runs source code directly"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 03: LLMs & Android Security",
    "explanation": "Correct answer is: APK can contain classes.dex AND APK can contain manifest/resources. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 256,
    "questionText": "Which Android sandbox statements are correct?",
    "options": [
      "Apps are isolated using Linux user/process separation",
      "App private files are normally separated",
      "Every app can read all other private files by default",
      "Sandbox comes only from app-store review"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 03: LLMs & Android Security",
    "explanation": "Correct answer is: Apps are isolated using Linux user/process separation AND App private files are normally separated. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 257,
    "questionText": "Which Android component exposure statements are correct?",
    "options": [
      "Exported component may be started externally",
      "Internal-only components should avoid unnecessary export",
      "Exported always means vulnerable",
      "Non-exported means no bug can exist"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 03: LLMs & Android Security",
    "explanation": "Correct answer is: Exported component may be started externally AND Internal-only components should avoid unnecessary export. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 258,
    "questionText": "Which intent statements are correct?",
    "options": [
      "Intents can start activities/services",
      "Intent extras may carry attacker-controlled data",
      "Intents are password hashes",
      "Intents always prove caller identity"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 03: LLMs & Android Security",
    "explanation": "Correct answer is: Intents can start activities/services AND Intent extras may carry attacker-controlled data. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 259,
    "questionText": "Which deep link statements are correct?",
    "options": [
      "Deep links can open app screens from URLs",
      "Input validation is needed for link parameters",
      "Deep links cannot change app state",
      "BROWSABLE means only vendor site can trigger link"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 03: LLMs & Android Security",
    "explanation": "Correct answer is: Deep links can open app screens from URLs AND Input validation is needed for link parameters. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 260,
    "questionText": "Which responsible disclosure statements are correct?",
    "options": [
      "Report privately first",
      "Minimise harm and data access",
      "Exploit real users for proof",
      "Publish all details immediately"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 03: LLMs & Android Security",
    "explanation": "Correct answer is: Report privately first AND Minimise harm and data access. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 261,
    "questionText": "Which Kerckhoffs statements are correct?",
    "options": [
      "Algorithm may be public",
      "Secret key should carry security",
      "Security should rely on hidden source code only",
      "Key can be public if algorithm is secret"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 04: Cryptography Basics & Entropy",
    "explanation": "Correct answer is: Algorithm may be public AND Secret key should carry security. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 262,
    "questionText": "Which key entropy statements are correct?",
    "options": [
      "Predictable generation lowers entropy",
      "Long output can still have low entropy",
      "Visual randomness guarantees entropy",
      "Entropy equals number of characters always"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 04: Cryptography Basics & Entropy",
    "explanation": "Correct answer is: Predictable generation lowers entropy AND Long output can still have low entropy. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 263,
    "questionText": "Which are poor crypto key sources?",
    "options": [
      "Timestamp-only seed",
      "Student ID plus date",
      "OS CSPRNG",
      "Hardware entropy pool"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Timestamp-only seed AND Student ID plus date. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 264,
    "questionText": "Which are good crypto key sources?",
    "options": [
      "CSPRNG from OS entropy",
      "Hardware noise/jitter mixed into entropy pool",
      "Username",
      "Favourite quote"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: CSPRNG from OS entropy AND Hardware noise/jitter mixed into entropy pool. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 265,
    "questionText": "Which XOR statements are correct?",
    "options": [
      "x xor 0 = x",
      "x xor x = 0",
      "x xor 1 = x always",
      "XOR is irreversible with same key"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 04: Cryptography Basics & Entropy",
    "explanation": "Correct answer is: x xor 0 = x AND x xor x = 0. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 266,
    "questionText": "Which stream cipher statements are correct?",
    "options": [
      "Keystream XOR plaintext gives ciphertext",
      "Reusing nonce/key can repeat keystream",
      "Stream ciphers provide authentication automatically always",
      "Sender and receiver never need sync"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 04: Cryptography Basics & Entropy",
    "explanation": "Correct answer is: Keystream XOR plaintext gives ciphertext AND Reusing nonce/key can repeat keystream. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 267,
    "questionText": "Which PRG statements are correct?",
    "options": [
      "Same seed gives same output in deterministic PRG",
      "Output should look random to efficient attackers",
      "PRG must be truly random at every output bit",
      "PRG security is against unlimited attackers only"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 04: Cryptography Basics & Entropy",
    "explanation": "Correct answer is: Same seed gives same output in deterministic PRG AND Output should look random to efficient attackers. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 268,
    "questionText": "Which hash properties are correct?",
    "options": [
      "Deterministic output",
      "Fixed-size digest",
      "Secret key required always",
      "Hashing encrypts plaintext reversibly"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 04: Cryptography Basics & Entropy",
    "explanation": "Correct answer is: Deterministic output AND Fixed-size digest. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 269,
    "questionText": "Which hash security goals are correct?",
    "options": [
      "Preimage resistance",
      "Collision resistance",
      "Port reliability",
      "Access authorization"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 04: Cryptography Basics & Entropy",
    "explanation": "Correct answer is: Preimage resistance AND Collision resistance. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 270,
    "questionText": "Which Merkle tree statements are correct?",
    "options": [
      "Leaves represent data block hashes",
      "Root can commit to many items",
      "It decrypts data",
      "It prevents all replay attacks"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Leaves represent data block hashes AND Root can commit to many items. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 271,
    "questionText": "Which MAC statements are correct?",
    "options": [
      "Uses shared secret key",
      "Helps detect tampering/forgery",
      "Anyone can verify publicly without key",
      "Provides confidentiality alone"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 05: Block Ciphers & MACs",
    "explanation": "Correct answer is: Uses shared secret key AND Helps detect tampering/forgery. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 272,
    "questionText": "Which HMAC statements are correct?",
    "options": [
      "Uses secret key with hash construction",
      "Avoids naive length-extension issue of H(K||M)",
      "Same as unkeyed SHA-256",
      "Removes need for integrity checks"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 05: Block Ciphers & MACs",
    "explanation": "Correct answer is: Uses secret key with hash construction AND Avoids naive length-extension issue of H(K||M). This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 273,
    "questionText": "Which encrypt/MAC order statements are correct?",
    "options": [
      "Encrypt-then-MAC authenticates ciphertext",
      "EtM can reject tampering before decrypting",
      "MAC-then-encrypt always verifies first",
      "Encrypt-only provides integrity automatically"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 05: Block Ciphers & MACs",
    "explanation": "Correct answer is: Encrypt-then-MAC authenticates ciphertext AND EtM can reject tampering before decrypting. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 274,
    "questionText": "Which replay-defense statements are correct?",
    "options": [
      "Nonce can help freshness",
      "Counter/timestamp can help freshness",
      "MAC alone always prevents replay",
      "Hash alone proves freshness"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 05: Block Ciphers & MACs",
    "explanation": "Correct answer is: Nonce can help freshness AND Counter/timestamp can help freshness. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 275,
    "questionText": "Which AEAD statements are correct?",
    "options": [
      "Provides confidentiality and integrity",
      "Associated data is authenticated",
      "Associated data is always encrypted",
      "Nonce reuse is always harmless"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 05: Block Ciphers & MACs",
    "explanation": "Correct answer is: Provides confidentiality and integrity AND Associated data is authenticated. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 276,
    "questionText": "Which nonce statements are correct?",
    "options": [
      "Some schemes require unique nonce per key",
      "Reuse can break security in stream/AEAD modes",
      "Nonces must always be secret",
      "Nonce is same as password"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Some schemes require unique nonce per key AND Reuse can break security in stream/AEAD modes. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 277,
    "questionText": "Which DH statements are correct?",
    "options": [
      "Public values can be exchanged openly",
      "Private exponents must remain secret",
      "DH sends the shared secret directly",
      "DH alone authenticates identity"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Public values can be exchanged openly AND Private exponents must remain secret. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 278,
    "questionText": "Which MITM statements are correct?",
    "options": [
      "Attacker can substitute public keys/values",
      "Authentication prevents undetected substitution",
      "MITM requires breaking AES math",
      "MITM is impossible on public networks"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 05-06: Key Exchange & DH",
    "explanation": "Correct answer is: Attacker can substitute public keys/values AND Authentication prevents undetected substitution. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 279,
    "questionText": "Which certificate statements are correct?",
    "options": [
      "Certificate binds identity to public key",
      "CA signature helps trust binding",
      "Certificate stores user password",
      "Certificate disables all XSS"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: Certificate binds identity to public key AND CA signature helps trust binding. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 280,
    "questionText": "Which TLS statements are correct?",
    "options": [
      "Provides encrypted channel after handshake",
      "Server certificate helps authenticate server",
      "TLS prevents all server-side bugs",
      "TLS removes need for input validation"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: Provides encrypted channel after handshake AND Server certificate helps authenticate server. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 281,
    "questionText": "Which signature statements are correct?",
    "options": [
      "Private key signs",
      "Public key verifies",
      "Shared secret signs for non-repudiation",
      "Signature hides message content automatically"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Private key signs AND Public key verifies. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 282,
    "questionText": "Which MAC vs signature statements are correct?",
    "options": [
      "MAC uses shared secret",
      "Signature supports public verification",
      "MAC gives public non-repudiation",
      "Signature requires same secret for all verifiers"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 05: Block Ciphers & MACs",
    "explanation": "Correct answer is: MAC uses shared secret AND Signature supports public verification. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 283,
    "questionText": "Which IP statements are correct?",
    "options": [
      "Best-effort delivery",
      "Packets may arrive out of order",
      "Guarantees encryption",
      "Guarantees no packet loss"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Best-effort delivery AND Packets may arrive out of order. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 284,
    "questionText": "Which UDP statements are correct?",
    "options": [
      "Connectionless",
      "No built-in delivery/order guarantee",
      "Three-way handshake required",
      "Always reliable"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: Connectionless AND No built-in delivery/order guarantee. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 285,
    "questionText": "Which port statements are correct?",
    "options": [
      "Port helps identify service/application",
      "TCP and UDP both use port numbers",
      "Port is same as IP address",
      "Port provides encryption"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Port helps identify service/application AND TCP and UDP both use port numbers. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 286,
    "questionText": "Which Heartbleed statements are correct?",
    "options": [
      "Missing bounds check was central",
      "It could leak process memory",
      "It was SQL injection",
      "It was caused by password salt"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: Missing bounds check was central AND It could leak process memory. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 287,
    "questionText": "Which authentication-factor examples are correct?",
    "options": [
      "Password = something you know",
      "Phone/token = something you have",
      "Fingerprint = something you know",
      "Username = something you are"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 07: Web & Auth Attacks",
    "explanation": "Correct answer is: Password = something you know AND Phone/token = something you have. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 288,
    "questionText": "Which biometric statements are correct?",
    "options": [
      "Readings can vary between attempts",
      "Fuzzy matching may be needed",
      "Biometrics are always exact strings",
      "Biometrics cannot be spoofed"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 07: Web & Auth Attacks",
    "explanation": "Correct answer is: Readings can vary between attempts AND Fuzzy matching may be needed. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 289,
    "questionText": "Which password attack statements are correct?",
    "options": [
      "Online guessing interacts with live system",
      "Offline guessing can happen after hash leak",
      "Offline guessing can be rate-limited by login server",
      "Online guessing needs stolen hashes always"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Online guessing interacts with live system AND Offline guessing can happen after hash leak. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 290,
    "questionText": "Which password storage statements are correct?",
    "options": [
      "Use random per-user salt",
      "Use slow password hashing",
      "Store plaintext for recovery",
      "Use unsalted fast MD5"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Use random per-user salt AND Use slow password hashing. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 291,
    "questionText": "Which salt/pepper statements are correct?",
    "options": [
      "Salt can be public per-user randomness",
      "Pepper is secret and stored separately",
      "Salt must be same for all users",
      "Pepper replaces password hashing"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 08: Password Storage & SQLi",
    "explanation": "Correct answer is: Salt can be public per-user randomness AND Pepper is secret and stored separately. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 292,
    "questionText": "Which SQL injection defenses are correct?",
    "options": [
      "Prepared statements",
      "Parameterized queries",
      "Hide login URL only",
      "Use HTTPS only"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 08: Password Storage & SQLi",
    "explanation": "Correct answer is: Prepared statements AND Parameterized queries. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 293,
    "questionText": "Which XSS defenses are correct?",
    "options": [
      "Output encode untrusted data",
      "Sanitize/validate dangerous HTML when needed",
      "Use SQL prepared statements only",
      "Disable TLS"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 07: Web & Auth Attacks",
    "explanation": "Correct answer is: Output encode untrusted data AND Sanitize/validate dangerous HTML when needed. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 294,
    "questionText": "Which CSRF defenses are correct?",
    "options": [
      "Anti-CSRF token",
      "SameSite cookie controls",
      "ECB encryption",
      "Password salt"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 08: Password Storage & SQLi",
    "explanation": "Correct answer is: Anti-CSRF token AND SameSite cookie controls. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 295,
    "questionText": "Which inference attack statements are correct?",
    "options": [
      "Allowed queries can leak hidden info together",
      "Aggregates can reveal sensitive data",
      "It requires breaking AES always",
      "It only affects blockchain"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Allowed queries can leak hidden info together AND Aggregates can reveal sensitive data. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 296,
    "questionText": "Which DoS statements are correct?",
    "options": [
      "Targets availability",
      "Can exhaust resources",
      "Provides confidentiality",
      "Requires SQL injection only"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 07: Web & Auth Attacks",
    "explanation": "Correct answer is: Targets availability AND Can exhaust resources. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 297,
    "questionText": "Which DDoS statements are correct?",
    "options": [
      "Uses multiple distributed sources",
      "Botnets can be involved",
      "Always single machine",
      "Always solved by password hashing"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 07: Web & Auth Attacks",
    "explanation": "Correct answer is: Uses multiple distributed sources AND Botnets can be involved. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 298,
    "questionText": "Which amplification statements are correct?",
    "options": [
      "Small request can cause large response",
      "Spoofed victim address may be abused",
      "Requires OTP reuse",
      "Only affects local files"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 07: Web & Auth Attacks",
    "explanation": "Correct answer is: Small request can cause large response AND Spoofed victim address may be abused. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 299,
    "questionText": "Which DDoS mitigations are correct?",
    "options": [
      "Rate limiting",
      "Traffic filtering/scrubbing",
      "Publish private keys",
      "Disable monitoring"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 07: Web & Auth Attacks",
    "explanation": "Correct answer is: Rate limiting AND Traffic filtering/scrubbing. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 300,
    "questionText": "Which cloud shared-responsibility statements are correct?",
    "options": [
      "Provider and customer both have roles",
      "Customer misconfiguration can expose data",
      "Provider is always responsible for customer passwords",
      "Cloud removes all security duties"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Provider and customer both have roles AND Customer misconfiguration can expose data. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 301,
    "questionText": "Which cloud encryption levels are correct?",
    "options": [
      "Disk/storage-level encryption",
      "Application-level encryption before upload/storage",
      "UI colour encryption",
      "Lecture-level encryption"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Disk/storage-level encryption AND Application-level encryption before upload/storage. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 302,
    "questionText": "Which key-management statements are correct?",
    "options": [
      "Protect keys from unauthorised access",
      "Rotate/revoke keys when needed",
      "Store all keys publicly",
      "Key loss never matters"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Protect keys from unauthorised access AND Rotate/revoke keys when needed. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 303,
    "questionText": "Which secure deletion statements are correct?",
    "options": [
      "Crypto-shredding deletes keys",
      "Retention policies reduce unnecessary stored data",
      "Encrypted data remains readable after key deletion",
      "Cloud deletion always means physical shredding only"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Crypto-shredding deletes keys AND Retention policies reduce unnecessary stored data. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 304,
    "questionText": "Which backup statements are correct?",
    "options": [
      "Backups support recovery",
      "Restores should be tested",
      "Backups never need access control",
      "Encryption makes backups unnecessary"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Backups support recovery AND Restores should be tested. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 305,
    "questionText": "Which state machine replication statements are correct?",
    "options": [
      "Same ordered commands produce same state",
      "Replicas must agree on command order",
      "Each replica executes different random commands",
      "Consensus is irrelevant"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 09: Consensus & Blockchain",
    "explanation": "Correct answer is: Same ordered commands produce same state AND Replicas must agree on command order. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 306,
    "questionText": "Which Raft statements are correct?",
    "options": [
      "Uses leader election",
      "Leader coordinates log replication",
      "Assumes anonymous open membership",
      "Does not need majority agreement"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 09: Consensus & Blockchain",
    "explanation": "Correct answer is: Uses leader election AND Leader coordinates log replication. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 307,
    "questionText": "Which Raft safety ideas are correct?",
    "options": [
      "Majority/quorum helps consistency",
      "Logs are ordered entries",
      "Followers independently choose conflicting committed logs freely",
      "Terms are password salts"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 09: Consensus & Blockchain",
    "explanation": "Correct answer is: Majority/quorum helps consistency AND Logs are ordered entries. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 308,
    "questionText": "Which blockchain/Sybil statements are correct?",
    "options": [
      "Permissionless identities are cheap to create",
      "PoW makes influence costly",
      "One email = one secure vote always",
      "Sybil attack means one user has one identity"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 09: Consensus & Blockchain",
    "explanation": "Correct answer is: Permissionless identities are cheap to create AND PoW makes influence costly. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 309,
    "questionText": "Which PoW statements are correct?",
    "options": [
      "Solving is costly",
      "Verification is relatively easy",
      "Solving is free",
      "It uses password salts only"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 09: Consensus & Blockchain",
    "explanation": "Correct answer is: Solving is costly AND Verification is relatively easy. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 310,
    "questionText": "Which fork statements are correct?",
    "options": [
      "Temporary competing chains can occur",
      "Most-work rule helps convergence",
      "Fork means password reuse",
      "Fork always proves attack success"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Temporary competing chains can occur AND Most-work rule helps convergence. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 311,
    "questionText": "Which double-spend statements are correct?",
    "options": [
      "Spending same value twice is attempted",
      "Confirmation depth reduces risk",
      "It means hashing twice",
      "It is SQL injection"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Spending same value twice is attempted AND Confirmation depth reduces risk. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 312,
    "questionText": "Which eclipse attack statements are correct?",
    "options": [
      "Victim’s peer view is controlled/isolated",
      "Network-level manipulation can affect blockchain view",
      "It requires stealing password salt",
      "It is prevented by ECB"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 09: Consensus & Blockchain",
    "explanation": "Correct answer is: Victim’s peer view is controlled/isolated AND Network-level manipulation can affect blockchain view. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 313,
    "questionText": "Which selfish mining statements are correct?",
    "options": [
      "Miner withholds blocks",
      "Miner releases strategically for advantage",
      "It is SQL injection",
      "It requires Android intents"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 09: Consensus & Blockchain",
    "explanation": "Correct answer is: Miner withholds blocks AND Miner releases strategically for advantage. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 314,
    "questionText": "Which DeFi sandwich statements are correct?",
    "options": [
      "Attacker places transaction before victim",
      "Attacker places transaction after victim",
      "It is password cracking",
      "It prevents all slippage"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Attacker places transaction before victim AND Attacker places transaction after victim. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 315,
    "questionText": "Which slippage statements are correct?",
    "options": [
      "It is price movement between expected and executed trade",
      "Slippage tolerance limits acceptable movement",
      "Higher tolerance always protects user more",
      "It is the same as password entropy"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 09: Consensus & Blockchain",
    "explanation": "Correct answer is: It is price movement between expected and executed trade AND Slippage tolerance limits acceptable movement. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 316,
    "questionText": "Which static analysis statements are correct?",
    "options": [
      "Does not require running program",
      "Can find possible bugs before execution",
      "Always has no false positives",
      "Always proves full security"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Does not require running program AND Can find possible bugs before execution. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 317,
    "questionText": "Which dynamic analysis statements are correct?",
    "options": [
      "Observes program during execution",
      "Depends on tested inputs/paths",
      "Proves all untested paths safe",
      "Cannot find runtime bugs"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Observes program during execution AND Depends on tested inputs/paths. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 318,
    "questionText": "Which fuzzing statements are correct?",
    "options": [
      "Generates/mutates many inputs",
      "Can find crashes or unexpected behaviour",
      "Guarantees all bugs found",
      "Requires no oracle/monitoring ever"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Generates/mutates many inputs AND Can find crashes or unexpected behaviour. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 319,
    "questionText": "Which symbolic execution statements are correct?",
    "options": [
      "Uses symbolic inputs/constraints",
      "Path explosion is a challenge",
      "Never explores branches",
      "Always scales perfectly"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Uses symbolic inputs/constraints AND Path explosion is a challenge. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 320,
    "questionText": "Which false result statements are correct?",
    "options": [
      "False positive = reported issue not real",
      "False negative = real issue missed",
      "False positive = missed bug",
      "False negative = fake issue reported"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: False positive = reported issue not real AND False negative = real issue missed. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 321,
    "questionText": "Which Rice’s theorem statements are correct?",
    "options": [
      "General semantic program properties can be undecidable",
      "Perfect automatic bug detection has theoretical limits",
      "It proves static analysis is useless",
      "It applies only to passwords"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: General semantic program properties can be undecidable AND Perfect automatic bug detection has theoretical limits. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 322,
    "questionText": "Which least privilege statements are correct?",
    "options": [
      "Give only needed permissions",
      "Reduces blast radius",
      "Give admin to all services",
      "Disable access control"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Give only needed permissions AND Reduces blast radius. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 323,
    "questionText": "Which defense-in-depth statements are correct?",
    "options": [
      "Multiple independent layers help",
      "Failure of one control should not doom system immediately",
      "One layer is always enough",
      "Monitoring is unnecessary"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Multiple independent layers help AND Failure of one control should not doom system immediately. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 324,
    "questionText": "Which logging statements are correct?",
    "options": [
      "Logs help incident investigation",
      "Logs should avoid sensitive secrets",
      "Logs should store plaintext passwords",
      "Logs replace authentication"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Logs help incident investigation AND Logs should avoid sensitive secrets. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 325,
    "questionText": "Which session-token statements are correct?",
    "options": [
      "Should be high entropy",
      "Should be protected in transit/storage",
      "Should be sequential",
      "Should include password in plaintext"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Should be high entropy AND Should be protected in transit/storage. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 326,
    "questionText": "Which cookie flags are correct?",
    "options": [
      "HttpOnly reduces JavaScript cookie access",
      "Secure sends cookie only over HTTPS",
      "HttpOnly prevents SQL injection",
      "Secure makes cookie public"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 08: Password Storage & SQLi",
    "explanation": "Correct answer is: HttpOnly reduces JavaScript cookie access AND Secure sends cookie only over HTTPS. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 327,
    "questionText": "Which input/output handling statements are correct?",
    "options": [
      "Validate inputs by expected format",
      "Encode outputs based on context",
      "Input validation replaces authentication",
      "Output encoding breaks TLS"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Validate inputs by expected format AND Encode outputs based on context. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 328,
    "questionText": "Which social engineering statements are correct?",
    "options": [
      "Targets human behaviour",
      "Can bypass technical controls",
      "Requires breaking AES",
      "Cannot affect cybersecurity"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Targets human behaviour AND Can bypass technical controls. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 329,
    "questionText": "Which phishing statements are correct?",
    "options": [
      "May steal credentials",
      "May trick users into unsafe actions",
      "Is only a hash collision",
      "Is prevented entirely by salt"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: May steal credentials AND May trick users into unsafe actions. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 330,
    "questionText": "Which ransomware statements are correct?",
    "options": [
      "Can encrypt/lock victim files",
      "Backups can aid recovery",
      "It is TLS certificate validation",
      "It improves availability"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Can encrypt/lock victim files AND Backups can aid recovery. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 331,
    "questionText": "Which certificate validation statements are correct?",
    "options": [
      "Check trusted CA chain",
      "Check hostname matches certificate",
      "Ignore expiry always",
      "Accept any self-signed certificate silently"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: Check trusted CA chain AND Check hostname matches certificate. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 332,
    "questionText": "Which certificate pinning statements are correct?",
    "options": [
      "Limits accepted certificates/keys",
      "Can reduce risk from unexpected CA issuance",
      "Stops all XSS",
      "Removes need for updates"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: Limits accepted certificates/keys AND Can reduce risk from unexpected CA issuance. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 333,
    "questionText": "Which secure coding statements are correct?",
    "options": [
      "Do not hard-code secrets",
      "Use vetted crypto libraries",
      "Write custom crypto for exam practice in production",
      "Store private keys in public repo"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Do not hard-code secrets AND Use vetted crypto libraries. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 334,
    "questionText": "Which side-channel statements are correct?",
    "options": [
      "Timing can leak information",
      "Cache/power patterns may leak secrets",
      "Side-channel means SQL injection only",
      "Constant-time code increases leakage"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Timing can leak information AND Cache/power patterns may leak secrets. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 335,
    "questionText": "Which constant-time statements are correct?",
    "options": [
      "Avoid secret-dependent timing where needed",
      "Useful for comparing MACs/password-derived values",
      "Makes code mathematically unbreakable",
      "Replaces all access control"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Avoid secret-dependent timing where needed AND Useful for comparing MACs/password-derived values. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 336,
    "questionText": "Which secure boot statements are correct?",
    "options": [
      "Verifies boot chain integrity",
      "Helps prevent unauthorised boot code",
      "Stores website comments",
      "Prevents all phishing"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Verifies boot chain integrity AND Helps prevent unauthorised boot code. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 337,
    "questionText": "Which access-control statements are correct?",
    "options": [
      "Authorization checks permissions",
      "Authentication alone is not enough",
      "Username alone grants admin rights",
      "Authorization means hashing password"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Authorization checks permissions AND Authentication alone is not enough. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 338,
    "questionText": "Which API security statements are correct?",
    "options": [
      "Validate request parameters",
      "Enforce authorization server-side",
      "Trust hidden client buttons only",
      "Put admin checks only in UI"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Validate request parameters AND Enforce authorization server-side. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 339,
    "questionText": "Which mobile-agent statements are correct?",
    "options": [
      "Agent needs observation after actions",
      "UI tree can guide action selection",
      "UI tree proves action safety",
      "One observation lasts forever"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Agent needs observation after actions AND UI tree can guide action selection. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 340,
    "questionText": "Which app permission statements are correct?",
    "options": [
      "Permissions limit access to sensitive resources",
      "Over-permissioning increases risk",
      "Permissions are only visual themes",
      "Permissions replace authentication checks inside app"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Permissions limit access to sensitive resources AND Over-permissioning increases risk. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 341,
    "questionText": "Which privacy statements are correct?",
    "options": [
      "Data minimisation reduces exposure",
      "Retention limits can reduce long-term risk",
      "Collecting everything forever is safest",
      "Privacy is unrelated to security"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Data minimisation reduces exposure AND Retention limits can reduce long-term risk. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 342,
    "questionText": "Which incident response statements are correct?",
    "options": [
      "Contain impact",
      "Learn and improve after incident",
      "Hide all evidence",
      "Never patch root cause"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Contain impact AND Learn and improve after incident. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 343,
    "questionText": "Which vulnerability-severity statements are correct?",
    "options": [
      "Impact matters",
      "Exploitability matters",
      "UI colour decides severity",
      "Severity ignores attacker capability"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Impact matters AND Exploitability matters. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 344,
    "questionText": "Which threat-model questions are useful?",
    "options": [
      "What can attacker do?",
      "What does attacker want?",
      "Which font is used?",
      "What is the lecturer’s email?"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: What can attacker do? AND What does attacker want?. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 345,
    "questionText": "Which defender-model questions are useful?",
    "options": [
      "What are defender goals?",
      "What resources/costs does defender have?",
      "What is attacker’s favourite colour?",
      "What is the exam room number?"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: What are defender goals? AND What resources/costs does defender have?. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 346,
    "questionText": "Which web-auth statements are correct?",
    "options": [
      "Password reset tokens need high entropy",
      "Reset tokens should expire",
      "Reset tokens can be username only",
      "Reset links should be predictable"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Password reset tokens need high entropy AND Reset tokens should expire. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 347,
    "questionText": "Which brute-force defenses are correct?",
    "options": [
      "Rate limits/lockouts for online guessing",
      "Slow hashes for offline guessing",
      "Store plaintext for speed",
      "Remove MFA"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Rate limits/lockouts for online guessing AND Slow hashes for offline guessing. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 348,
    "questionText": "Which cloud-storage misconfiguration statements are correct?",
    "options": [
      "Public bucket can expose data",
      "Access policies should be reviewed",
      "Long URL always makes data private",
      "Provider always prevents all exposure"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Public bucket can expose data AND Access policies should be reviewed. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 349,
    "questionText": "Which encryption-at-rest statements are correct?",
    "options": [
      "Protects stored data if storage is accessed",
      "Key management remains critical",
      "Stops all authenticated misuse",
      "Removes need for authorization"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Protects stored data if storage is accessed AND Key management remains critical. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 350,
    "questionText": "Which encryption-in-transit statements are correct?",
    "options": [
      "Protects data crossing networks",
      "TLS is common example",
      "Replaces server-side input validation",
      "Prevents all malware"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Protects data crossing networks AND TLS is common example. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 351,
    "questionText": "Which data lifecycle statements are correct?",
    "options": [
      "Collect only needed data",
      "Delete/expire data when no longer needed",
      "Keep all data forever",
      "Make backups public"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Collect only needed data AND Delete/expire data when no longer needed. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 352,
    "questionText": "Which consensus fault statements are correct?",
    "options": [
      "Crash faults mean nodes stop/fail silently",
      "Byzantine faults may behave arbitrarily/maliciously",
      "All consensus assumes malicious nodes only",
      "Raft is designed for anonymous Sybil resistance"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 09: Consensus & Blockchain",
    "explanation": "Correct answer is: Crash faults mean nodes stop/fail silently AND Byzantine faults may behave arbitrarily/maliciously. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 353,
    "questionText": "Which Raft role statements are correct?",
    "options": [
      "Leader",
      "Follower/candidate",
      "Certificate authority",
      "Miner only"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 09: Consensus & Blockchain",
    "explanation": "Correct answer is: Leader AND Follower/candidate. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 354,
    "questionText": "Which blockchain security statements are correct?",
    "options": [
      "More confirmations usually reduce reorg risk",
      "Network assumptions matter",
      "Blockchain automatically fixes all bugs",
      "Smart contracts cannot have vulnerabilities"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 09: Consensus & Blockchain",
    "explanation": "Correct answer is: More confirmations usually reduce reorg risk AND Network assumptions matter. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 355,
    "questionText": "Which smart contract statements are correct?",
    "options": [
      "Code execution can control assets",
      "Bugs can be financially severe",
      "Contracts are always reversible",
      "No need to test contracts"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Code execution can control assets AND Bugs can be financially severe. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 356,
    "questionText": "Which MEV statements are correct?",
    "options": [
      "Transaction ordering can create profit opportunities",
      "Sandwich attacks are MEV-like behaviour",
      "MEV means password entropy",
      "MEV prevents front-running"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Transaction ordering can create profit opportunities AND Sandwich attacks are MEV-like behaviour. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 357,
    "questionText": "Which program-analysis limitation statements are correct?",
    "options": [
      "Coverage limits dynamic testing",
      "Undecidability limits perfect static analysis",
      "Testing one input proves all inputs",
      "AI tools guarantee complete analysis"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Coverage limits dynamic testing AND Undecidability limits perfect static analysis. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 358,
    "questionText": "Which secure research statements are correct?",
    "options": [
      "Use safe local reproduction where possible",
      "Get permission for testing real targets",
      "Good intention removes legal risk",
      "Download real user data for proof"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Use safe local reproduction where possible AND Get permission for testing real targets. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 359,
    "questionText": "Which disclosure report contents are appropriate?",
    "options": [
      "Clear impact summary",
      "Repro steps with minimal harm",
      "Public dump of user data",
      "Threats to vendor"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 03: LLMs & Android Security",
    "explanation": "Correct answer is: Clear impact summary AND Repro steps with minimal harm. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 360,
    "questionText": "Which authentication vs authorization statements are correct?",
    "options": [
      "Authentication verifies identity",
      "Authorization decides allowed actions",
      "Authorization happens before identity always and only",
      "Authentication means admin permission"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 07: Web & Auth Attacks",
    "explanation": "Correct answer is: Authentication verifies identity AND Authorization decides allowed actions. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 361,
    "questionText": "Which principle-of-open-design statements are correct?",
    "options": [
      "Public algorithms allow review",
      "Secret keys remain protected",
      "Hidden design is the main security property",
      "Users must never know algorithm names"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Public algorithms allow review AND Secret keys remain protected. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 362,
    "questionText": "Which randomness statements are correct?",
    "options": [
      "Random-looking is not enough",
      "Predictability matters to attacker",
      "Length alone guarantees security",
      "Human choices are usually high entropy"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 04: Cryptography Basics & Entropy",
    "explanation": "Correct answer is: Random-looking is not enough AND Predictability matters to attacker. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 363,
    "questionText": "Which crypto misuse statements are correct?",
    "options": [
      "Reusing nonce in wrong mode can break security",
      "Reusing OTP key breaks perfect secrecy",
      "ECB is ideal for images/structured data",
      "MD5 is modern password hashing best practice"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Reusing nonce in wrong mode can break security AND Reusing OTP key breaks perfect secrecy. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 364,
    "questionText": "Which integrity mechanisms are correct?",
    "options": [
      "MAC",
      "Digital signature",
      "Plain encryption only always",
      "Compression"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 01-02: Security Principles & Models",
    "explanation": "Correct answer is: MAC AND Digital signature. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 365,
    "questionText": "Which confidentiality mechanisms are correct?",
    "options": [
      "Encryption",
      "Access control",
      "Plain checksum",
      "Public log"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 01-02: Security Principles & Models",
    "explanation": "Correct answer is: Encryption AND Access control. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 366,
    "questionText": "Which availability mechanisms are correct?",
    "options": [
      "Redundancy",
      "DDoS mitigation",
      "Plain hash digest",
      "Password salt"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 01-02: Security Principles & Models",
    "explanation": "Correct answer is: Redundancy AND DDoS mitigation. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 367,
    "questionText": "Which examples show blurred CIA boundaries?",
    "options": [
      "Ransomware affects availability and possibly confidentiality",
      "Unauthorized deletion can affect integrity and availability",
      "CIA categories never overlap",
      "Confidentiality and integrity are always identical"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Ransomware affects availability and possibly confidentiality AND Unauthorized deletion can affect integrity and availability. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 368,
    "questionText": "Which answers about “secure enough” are correct?",
    "options": [
      "Depends on threat model",
      "Depends on asset value and cost/risk tradeoff",
      "Can be decided by feelings only",
      "Always means impossible to attack"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Depends on threat model AND Depends on asset value and cost/risk tradeoff. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 369,
    "questionText": "Which security tradeoffs are correct?",
    "options": [
      "More security can reduce usability",
      "More availability can increase exposed surface",
      "Security has no costs",
      "Usability is never relevant"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: More security can reduce usability AND More availability can increase exposed surface. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 370,
    "questionText": "Which controls help against account takeover?",
    "options": [
      "MFA",
      "Rate limiting/login monitoring",
      "ECB encryption",
      "Public password list"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: MFA AND Rate limiting/login monitoring. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 371,
    "questionText": "Which controls help against data leaks?",
    "options": [
      "Least privilege",
      "Encryption and access auditing",
      "Hard-code keys",
      "Public bucket policies"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Least privilege AND Encryption and access auditing. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 372,
    "questionText": "Which controls help against injection?",
    "options": [
      "Parameterized queries",
      "Server-side validation",
      "TLS only",
      "Password salt only"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Parameterized queries AND Server-side validation. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 373,
    "questionText": "Which controls help against stored XSS?",
    "options": [
      "Sanitize stored HTML if allowed",
      "Encode on output",
      "Use UDP",
      "Use PoW"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 07: Web & Auth Attacks",
    "explanation": "Correct answer is: Sanitize stored HTML if allowed AND Encode on output. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 374,
    "questionText": "Which controls help against replay?",
    "options": [
      "Nonces",
      "Sequence numbers/counters",
      "Plain MAC alone without freshness",
      "Reused timestamps without checking"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 05: Block Ciphers & MACs",
    "explanation": "Correct answer is: Nonces AND Sequence numbers/counters. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 375,
    "questionText": "Which statements about AEAD tags are correct?",
    "options": [
      "Tag verifies integrity/authenticity",
      "Modified ciphertext should fail verification",
      "Tag is a password salt",
      "Tag decrypts plaintext by itself"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 05: Block Ciphers & MACs",
    "explanation": "Correct answer is: Tag verifies integrity/authenticity AND Modified ciphertext should fail verification. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 376,
    "questionText": "Which statements about public keys are correct?",
    "options": [
      "Public keys may be shared",
      "Authentic binding to identity matters",
      "Public key must be hidden always",
      "Anyone with public key can sign as owner"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Public keys may be shared AND Authentic binding to identity matters. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 377,
    "questionText": "Which statements about private keys are correct?",
    "options": [
      "Must be kept secret",
      "Compromise can allow impersonation/signing",
      "Should be posted with certificate",
      "Are same as port numbers"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Must be kept secret AND Compromise can allow impersonation/signing. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 378,
    "questionText": "Which browser security checks matter for HTTPS?",
    "options": [
      "Certificate chain trusted",
      "Domain name matches",
      "User’s age",
      "Database schema"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Certificate chain trusted AND Domain name matches. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 379,
    "questionText": "Which certificate problems should cause warning?",
    "options": [
      "Expired certificate",
      "Hostname mismatch",
      "Valid CA chain and correct hostname",
      "Strong key and valid dates"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: Expired certificate AND Hostname mismatch. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 380,
    "questionText": "Which key exchange attacks are correct?",
    "options": [
      "MITM substitution of DH public values",
      "Downgrade to weaker parameters/protocol if not protected",
      "SQL injection into blockchain only",
      "XSS through salts"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: MITM substitution of DH public values AND Downgrade to weaker parameters/protocol if not protected. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 381,
    "questionText": "Which network security statements are correct?",
    "options": [
      "TLS secures application traffic over TCP",
      "IP alone does not provide confidentiality",
      "TCP always provides encryption",
      "UDP cannot carry secure protocols"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: TLS secures application traffic over TCP AND IP alone does not provide confidentiality. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 382,
    "questionText": "Which DoS resource targets are correct?",
    "options": [
      "CPU/memory",
      "Network bandwidth",
      "Password entropy only",
      "Certificate CN only"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 07: Web & Auth Attacks",
    "explanation": "Correct answer is: CPU/memory AND Network bandwidth. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 383,
    "questionText": "Which botnet statements are correct?",
    "options": [
      "Many compromised devices can participate",
      "Used in DDoS campaigns",
      "Always requires physical access",
      "Means password salt list"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Many compromised devices can participate AND Used in DDoS campaigns. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 384,
    "questionText": "Which secure API token statements are correct?",
    "options": [
      "Use high entropy",
      "Expire/revoke when needed",
      "Derive only from username",
      "Put in public client code"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Use high entropy AND Expire/revoke when needed. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 385,
    "questionText": "Which cloud customer responsibilities are common?",
    "options": [
      "Configure access policies correctly",
      "Protect application/user data",
      "Maintain provider data-centre hardware always",
      "Control provider physical guards"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Configure access policies correctly AND Protect application/user data. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 386,
    "questionText": "Which cloud provider responsibilities are common?",
    "options": [
      "Physical infrastructure security",
      "Underlying managed service operation",
      "Customer’s weak password choice always",
      "Customer’s app SQL injection always"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Physical infrastructure security AND Underlying managed service operation. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 387,
    "questionText": "Which deletion challenges are correct?",
    "options": [
      "Replicas/backups may retain data",
      "Cloud physical media may be abstracted",
      "Deletion is always instant across all backups",
      "Encryption keys are irrelevant"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Replicas/backups may retain data AND Cloud physical media may be abstracted. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 388,
    "questionText": "Which secure design statements are correct?",
    "options": [
      "Make assumptions explicit",
      "Validate assumptions through testing/review",
      "Assume every layer always works",
      "Hide all assumptions"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Make assumptions explicit AND Validate assumptions through testing/review. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 389,
    "questionText": "Which testing statements are correct?",
    "options": [
      "Testing can show bugs exist",
      "Testing usually cannot prove absence of all bugs",
      "One test proves no vulnerabilities",
      "Failed fuzzing means perfect security"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Testing can show bugs exist AND Testing usually cannot prove absence of all bugs. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 390,
    "questionText": "Which code review statements are correct?",
    "options": [
      "Human review can catch logic flaws",
      "Tool output still needs judgement",
      "Code review guarantees no bugs",
      "Review is useless if tests exist"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Human review can catch logic flaws AND Tool output still needs judgement. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 391,
    "questionText": "Which AI-assisted workflow statements are correct?",
    "options": [
      "Use AI to generate hypotheses",
      "Verify with evidence and safe experiments",
      "Replace responsible disclosure",
      "Accept all outputs as true"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Use AI to generate hypotheses AND Verify with evidence and safe experiments. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 392,
    "questionText": "Which vulnerability report evidence is useful?",
    "options": [
      "Minimal reproducible example",
      "Exact affected component/version/path",
      "Vague statement only",
      "Screenshots of private user data dump"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Minimal reproducible example AND Exact affected component/version/path. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 393,
    "questionText": "Which ethical constraints are correct?",
    "options": [
      "Do not access more data than necessary",
      "Follow authorised scope",
      "Attack unrelated systems",
      "Ignore vendor process"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: Do not access more data than necessary AND Follow authorised scope. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 394,
    "questionText": "Which cryptographic library practices are correct?",
    "options": [
      "Use well-reviewed libraries",
      "Use safe default modes/APIs",
      "Build custom primitives for production",
      "Disable authentication tag checks"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Use well-reviewed libraries AND Use safe default modes/APIs. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 395,
    "questionText": "Which password reset statements are correct?",
    "options": [
      "Token should be unguessable",
      "Token should be single-use/expire",
      "Token should be user_id + date",
      "Token should never be stored/validated"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Token should be unguessable AND Token should be single-use/expire. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 396,
    "questionText": "Which secure mobile app statements are correct?",
    "options": [
      "Re-check authorization inside sensitive screens/actions",
      "Treat external intents/deep links as untrusted input",
      "Trust only UI hiding",
      "Trust caller package name without validation always"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Re-check authorization inside sensitive screens/actions AND Treat external intents/deep links as untrusted input. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 397,
    "questionText": "Which “exam thinking” statements are correct?",
    "options": [
      "Match security claim to model/threat model",
      "Look for assumptions and failure points",
      "Choose strongest-looking word without reasoning",
      "Ignore attacker capability"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Match security claim to model/threat model AND Look for assumptions and failure points. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 398,
    "questionText": "A system uses AES-CTR(key, nonce=0) for every file. Which are correct?",
    "options": [
      "Reused nonce can repeat keystream",
      "XOR of ciphertexts can leak XOR of plaintexts",
      "CTR automatically prevents replay and tampering",
      "Nonce reuse improves performance safely",
      "AES key length becomes irrelevant only because nonce is zero"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Reused nonce can repeat keystream AND XOR of ciphertexts can leak XOR of plaintexts. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 399,
    "questionText": "A login stores SHA256(password) without salt. Which are correct?",
    "options": [
      "Same passwords have same hashes",
      "Precomputed tables are more useful",
      "SHA-256 makes offline guessing impossible",
      "No attacker can test guesses offline",
      "Password recovery becomes secure"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Same passwords have same hashes AND Precomputed tables are more useful. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 400,
    "questionText": "An Android activity AdminActivity is exported and trusts intent.extra(\"role\")=\"admin\". Which are correct?",
    "options": [
      "External apps may try to launch it",
      "Trusting attacker-controlled extras is unsafe",
      "Exported components are always safe if name includes Admin",
      "Intent extras prove the caller is trusted",
      "Sandboxing prevents all exported-component abuse"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 03: LLMs & Android Security",
    "explanation": "Correct answer is: External apps may try to launch it AND Trusting attacker-controlled extras is unsafe. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 401,
    "questionText": "A deep link app://pay?amount=1000&to=attacker opens payment screen without session check. Which are correct?",
    "options": [
      "External URL can create dangerous app state",
      "Missing authentication/authorization check is critical",
      "BROWSABLE guarantees trusted website origin",
      "URL parameters cannot be attacker-controlled",
      "Deep links bypass all OS sandboxing by definition"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 03: LLMs & Android Security",
    "explanation": "Correct answer is: External URL can create dangerous app state AND Missing authentication/authorization check is critical. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 402,
    "questionText": "Alice sends M || SHA256(M) over network. Eve changes M. Which are correct?",
    "options": [
      "Eve can recompute SHA-256 for modified message",
      "This does not authenticate Alice against active attacker",
      "Collision resistance alone makes it a MAC",
      "SHA-256 hides the plaintext",
      "Receiver can verify sender identity from hash alone"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Eve can recompute SHA-256 for modified message AND This does not authenticate Alice against active attacker. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 403,
    "questionText": "A protocol checks MAC only after decrypting malformed ciphertext. Which are correct?",
    "options": [
      "Tampering may reach decryption code first",
      "EtM-style verification before decryption can reduce attack surface",
      "This is always identical to EtM",
      "MACs are useless if encryption is AES",
      "Decryption errors cannot leak information"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 05: Block Ciphers & MACs",
    "explanation": "Correct answer is: Tampering may reach decryption code first AND EtM-style verification before decryption can reduce attack surface. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 404,
    "questionText": "A server accepts any certificate if TLS connection succeeds. Which are correct?",
    "options": [
      "MITM with attacker certificate may succeed",
      "Hostname/CA validation is essential",
      "Encryption alone proves peer identity",
      "Any public key is automatically trusted",
      "Certificate expiry improves security if ignored"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: MITM with attacker certificate may succeed AND Hostname/CA validation is essential. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 405,
    "questionText": "Plain Diffie-Hellman is used without signatures/certificates. Which are correct?",
    "options": [
      "MITM can substitute public DH values",
      "DH by itself does not authenticate peers",
      "Shared secret is sent directly in plaintext",
      "Discrete log becomes easy because authentication missing",
      "Public modulus must be secret"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: MITM can substitute public DH values AND DH by itself does not authenticate peers. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 406,
    "questionText": "A server has valid HTTPS but vulnerable SQL concatenation. Which are correct?",
    "options": [
      "TLS does not fix SQL injection inside server logic",
      "Parameterized queries directly address SQL injection",
      "HTTPS makes all inputs trusted",
      "SQL injection requires invalid certificate",
      "Prepared statements are only for encryption"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 08: Password Storage & SQLi",
    "explanation": "Correct answer is: TLS does not fix SQL injection inside server logic AND Parameterized queries directly address SQL injection. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 407,
    "questionText": "A comment field stores <script>...</script> and displays it to all users. Which are correct?",
    "options": [
      "This is stored XSS",
      "Output encoding/sanitization can mitigate it",
      "SQL parameterization alone fixes rendering context",
      "TLS prevents browser script execution",
      "XSS only affects server CPU availability"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: This is stored XSS AND Output encoding/sanitization can mitigate it. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 408,
    "questionText": "A reset token is SHA256(email || current_hour). Which are correct?",
    "options": [
      "Effective search space may be very small",
      "Hash output length does not equal entropy",
      "SHA-256 makes timestamp unpredictable",
      "Public email plus time gives 256-bit entropy",
      "This provides non-repudiation"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Effective search space may be very small AND Hash output length does not equal entropy. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 409,
    "questionText": "A cloud bucket is public but filenames are random UUIDs. Which are correct?",
    "options": [
      "Public access is still risky",
      "Access control should not rely only on unguessable URLs",
      "UUID filenames guarantee legal compliance",
      "Encryption is impossible in cloud storage",
      "Provider is always solely responsible"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Public access is still risky AND Access control should not rely only on unguessable URLs. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 410,
    "questionText": "A company wants secure deletion of encrypted archived data. Which are correct?",
    "options": [
      "Destroying the relevant encryption key can make data unreadable",
      "Backups/replicas must be considered",
      "Deleting local UI entry always deletes every copy",
      "Crypto-shredding works even if key is still accessible",
      "Retention policies are unrelated"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Destroying the relevant encryption key can make data unreadable AND Backups/replicas must be considered. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 411,
    "questionText": "A biometric system accepts many impostors but rejects few users. Which are correct?",
    "options": [
      "False accept rate is high",
      "Convenience may be high but security weaker",
      "False reject rate is high",
      "No tradeoff exists",
      "Biometrics are exact, so this cannot happen"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 07: Web & Auth Attacks",
    "explanation": "Correct answer is: False accept rate is high AND Convenience may be high but security weaker. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 412,
    "questionText": "A password database leak contains salted Argon2id hashes. Which are correct?",
    "options": [
      "Offline guessing is still possible",
      "Slow hashing and salts make attack harder",
      "Salts must be secret to be useful",
      "Argon2id makes weak passwords impossible to guess",
      "Hashes can be decrypted directly with public key"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 08: Password Storage & SQLi",
    "explanation": "Correct answer is: Offline guessing is still possible AND Slow hashing and salts make attack harder. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 413,
    "questionText": "An online login endpoint allows unlimited guesses. Which are correct?",
    "options": [
      "Rate limiting can reduce online guessing",
      "MFA can reduce account takeover risk",
      "Salt alone stops online guessing",
      "TLS prevents password guessing",
      "Fast hashes are better for online security"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Rate limiting can reduce online guessing AND MFA can reduce account takeover risk. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 414,
    "questionText": "A web app uses CSRF token but also allows GET /transfer?to=x&amount=1000. Which are correct?",
    "options": [
      "State-changing GET endpoint is risky",
      "CSRF protection must cover state-changing actions",
      "GET requests cannot be abused",
      "CSRF is the same as SQL injection",
      "HTTPS removes CSRF risk completely"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 08: Password Storage & SQLi",
    "explanation": "Correct answer is: State-changing GET endpoint is risky AND CSRF protection must cover state-changing actions. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 415,
    "questionText": "A DNS reflector replies 4000 bytes to 40-byte spoofed requests. Which are correct?",
    "options": [
      "This can amplify DDoS traffic",
      "Spoofed source can make victim receive replies",
      "It is mainly an integrity attack on passwords",
      "OTP prevents it",
      "Amplification requires stolen TLS private key"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 07: Web & Auth Attacks",
    "explanation": "Correct answer is: This can amplify DDoS traffic AND Spoofed source can make victim receive replies. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 416,
    "questionText": "A service auto-scales during DDoS. Which are correct?",
    "options": [
      "Auto-scaling may help availability temporarily",
      "Auto-scaling can increase cost and may not solve attack",
      "Auto-scaling proves no DDoS occurred",
      "Auto-scaling replaces rate limiting",
      "Auto-scaling decrypts attack packets"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 07: Web & Auth Attacks",
    "explanation": "Correct answer is: Auto-scaling may help availability temporarily AND Auto-scaling can increase cost and may not solve attack. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 417,
    "questionText": "In Raft, two leaders appear in same term due to bug. Which are correct?",
    "options": [
      "This threatens safety assumptions",
      "Leader election correctness matters for log consistency",
      "Raft expects many leaders per term normally",
      "This improves availability without risk",
      "Terms are cryptographic nonces only"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 09: Consensus & Blockchain",
    "explanation": "Correct answer is: This threatens safety assumptions AND Leader election correctness matters for log consistency. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 418,
    "questionText": "A replicated service applies commands in different orders on replicas. Which are correct?",
    "options": [
      "States may diverge",
      "Consensus/order agreement is needed for state-machine replication",
      "Different order always gives same state",
      "Replication removes need for deterministic execution",
      "Hashing commands solves all ordering issues"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: States may diverge AND Consensus/order agreement is needed for state-machine replication. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 419,
    "questionText": "A permissionless voting system uses “one account = one vote” with free accounts. Which are correct?",
    "options": [
      "Sybil attack is likely",
      "Cost/identity resistance mechanism is needed",
      "It is safe because usernames are unique strings",
      "PoW is irrelevant to Sybil resistance",
      "Attackers cannot create accounts"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Sybil attack is likely AND Cost/identity resistance mechanism is needed. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 420,
    "questionText": "A PoW blockchain has temporary fork. Which are correct?",
    "options": [
      "Most-work rule helps nodes converge",
      "Waiting confirmations reduces reorg/double-spend risk",
      "Fork means TLS failed",
      "Forks can never happen naturally",
      "One confirmation is mathematically final forever"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 09: Consensus & Blockchain",
    "explanation": "Correct answer is: Most-work rule helps nodes converge AND Waiting confirmations reduces reorg/double-spend risk. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 421,
    "questionText": "A miner hides found blocks and releases them strategically. Which are correct?",
    "options": [
      "This resembles selfish mining",
      "It can exploit block propagation/timing",
      "It is SQL injection",
      "It is password spraying",
      "It requires Android exported activity"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: This resembles selfish mining AND It can exploit block propagation/timing. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 422,
    "questionText": "A node connects only to attacker-controlled blockchain peers. Which are correct?",
    "options": [
      "This resembles eclipse attack",
      "The node’s view of network/chain can be manipulated",
      "This is impossible because P2P is always honest",
      "It is fixed by password salt",
      "It requires ECB mode"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 09: Consensus & Blockchain",
    "explanation": "Correct answer is: This resembles eclipse attack AND The node’s view of network/chain can be manipulated. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 423,
    "questionText": "A user sets very high slippage tolerance on AMM trade. Which are correct?",
    "options": [
      "Sandwich/front-running losses may become easier",
      "Transaction may execute at much worse price",
      "High slippage always protects user from MEV",
      "Slippage tolerance is password entropy",
      "It prevents all ordering attacks"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 09: Consensus & Blockchain",
    "explanation": "Correct answer is: Sandwich/front-running losses may become easier AND Transaction may execute at much worse price. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 424,
    "questionText": "Static analysis reports possible null dereference; runtime never triggers in tests. Which are correct?",
    "options": [
      "It may be false positive",
      "Tests may not cover triggering path",
      "Runtime tests prove bug impossible",
      "Static analysis is therefore useless",
      "Null dereference is a cryptographic attack only"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: It may be false positive AND Tests may not cover triggering path. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 425,
    "questionText": "Fuzzer runs for one hour and finds no crash. Which are correct?",
    "options": [
      "Bugs may remain in uncovered paths",
      "No crash is not proof of security",
      "All vulnerabilities are proven absent",
      "Fuzzing always gives formal proof",
      "Fuzzing does not need input generation"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Bugs may remain in uncovered paths AND No crash is not proof of security. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 426,
    "questionText": "Symbolic execution explores branches with constraints but times out. Which are correct?",
    "options": [
      "Path explosion may be the cause",
      "Constraint solving can be expensive",
      "Timeout proves no bugs exist",
      "Symbolic execution never uses paths",
      "It only works for TLS certificates"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Path explosion may be the cause AND Constraint solving can be expensive. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 427,
    "questionText": "An AI tool finds vulnerability but cannot produce trace, affected input, or code path. Which are correct?",
    "options": [
      "Treat as unverified hypothesis",
      "Ask for evidence or manually verify",
      "Submit as confirmed critical bug",
      "Publish full details immediately",
      "Evidence is unnecessary if wording is confident"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: Treat as unverified hypothesis AND Ask for evidence or manually verify. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 428,
    "questionText": "A researcher accidentally sees real user medical records during testing. Which are correct?",
    "options": [
      "Stop and minimise further access",
      "Report privately through authorised channel",
      "Download full dataset for proof",
      "Share screenshots publicly",
      "Continue exploiting to measure full impact"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: Stop and minimise further access AND Report privately through authorised channel. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 429,
    "questionText": "An app hides admin button in UI but API /admin/delete lacks authz. Which are correct?",
    "options": [
      "Client-side hiding is not authorization",
      "Server-side authorization is required",
      "Hidden buttons prove endpoint safe",
      "TLS prevents unauthorized API calls",
      "UI tree cannot reveal hidden issues"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Client-side hiding is not authorization AND Server-side authorization is required. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 430,
    "questionText": "A MAC tag comparison exits on first wrong byte. Which are correct?",
    "options": [
      "Timing differences may leak information",
      "Constant-time comparison can help",
      "Early exit always improves security",
      "Timing attacks require SQL injection",
      "MAC tags should be public keys"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 05: Block Ciphers & MACs",
    "explanation": "Correct answer is: Timing differences may leak information AND Constant-time comparison can help. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 431,
    "questionText": "AES-GCM is used with same nonce/key for two messages. Which are correct?",
    "options": [
      "Security can break badly",
      "Unique nonce per key is required",
      "GCM nonce reuse is harmless",
      "Reuse increases entropy",
      "Authentication tag becomes unnecessary"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Security can break badly AND Unique nonce per key is required. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 432,
    "questionText": "A developer encrypts data but stores key beside ciphertext in public bucket. Which are correct?",
    "options": [
      "Encryption is ineffective if key is exposed",
      "Key management is part of security",
      "Public key exposure is always same as private key exposure",
      "Ciphertext becomes safer because key is nearby",
      "Key location never matters"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Encryption is ineffective if key is exposed AND Key management is part of security. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 433,
    "questionText": "A system uses HMAC(K, message) but no sequence number. Which are correct?",
    "options": [
      "Message tampering may be detected",
      "Replay may still be possible",
      "HMAC alone guarantees freshness",
      "HMAC provides encryption",
      "HMAC uses no secret key"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 05: Block Ciphers & MACs",
    "explanation": "Correct answer is: Message tampering may be detected AND Replay may still be possible. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 434,
    "questionText": "A server signs software update metadata. Which are correct?",
    "options": [
      "Client can verify publisher authenticity/integrity",
      "Private signing key compromise would be serious",
      "Signature hides update contents automatically",
      "Public verification key must be secret",
      "Signature prevents all malware bugs inside signed update"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Client can verify publisher authenticity/integrity AND Private signing key compromise would be serious. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 435,
    "questionText": "A browser accepts expired certificate after user clicks through warning. Which are correct?",
    "options": [
      "User may be vulnerable to MITM",
      "Expiry is part of certificate validity",
      "Expired certificates are always safer",
      "Clicking warning improves authentication",
      "TLS encryption alone guarantees identity"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: User may be vulnerable to MITM AND Expiry is part of certificate validity. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 436,
    "questionText": "A system logs password reset tokens in plaintext. Which are correct?",
    "options": [
      "Logs become sensitive attack target",
      "Tokens should be protected/redacted",
      "Logging secrets is harmless if HTTPS used",
      "Reset tokens need not expire",
      "Logs replace access control"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Logs become sensitive attack target AND Tokens should be protected/redacted. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 437,
    "questionText": "A mobile app stores API secret in APK resources. Which are correct?",
    "options": [
      "APK can be unpacked/decompiled",
      "Hard-coded client secrets can be extracted",
      "APK resources are impossible to read",
      "Android sandbox hides APK from device owner completely",
      "Public client apps can safely contain global secrets"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 03: LLMs & Android Security",
    "explanation": "Correct answer is: APK can be unpacked/decompiled AND Hard-coded client secrets can be extracted. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 438,
    "questionText": "A cloud SaaS customer shares admin credentials with all staff. Which are correct?",
    "options": [
      "Violates least privilege/accountability",
      "Customer-side practice can create risk",
      "Provider is solely responsible for every misuse",
      "Shared credentials improve auditability",
      "Encryption-at-rest fixes all access misuse"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Violates least privilege/accountability AND Customer-side practice can create risk. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 439,
    "questionText": "A service keeps logs forever with personal data. Which are correct?",
    "options": [
      "Retention risk increases over time",
      "Data minimisation/retention policy can reduce exposure",
      "Keeping everything forever is always safest",
      "Logs never contain sensitive data",
      "Deletion policy is unrelated to privacy/security"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Retention risk increases over time AND Data minimisation/retention policy can reduce exposure. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 440,
    "questionText": "An attacker changes ciphertext block order in ECB-encrypted file. Which are correct?",
    "options": [
      "Decrypted plaintext blocks may reorder",
      "ECB gives no built-in integrity",
      "ECB prevents tampering automatically",
      "Block swapping is impossible",
      "Hash collision resistance fixes ECB pattern leakage"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 05: Block Ciphers & MACs",
    "explanation": "Correct answer is: Decrypted plaintext blocks may reorder AND ECB gives no built-in integrity. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 441,
    "questionText": "A system uses CBC encryption with random IV but no MAC. Which are correct?",
    "options": [
      "Confidentiality may exist but integrity is missing",
      "Active tampering may not be reliably detected",
      "Encryption alone always authenticates sender",
      "IV is same as MAC tag",
      "Random IV prevents all replay attacks"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 05: Block Ciphers & MACs",
    "explanation": "Correct answer is: Confidentiality may exist but integrity is missing AND Active tampering may not be reliably detected. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 442,
    "questionText": "A user password is 20 characters but chosen as repeated pattern abcabcabc.... Which are correct?",
    "options": [
      "Length alone does not guarantee high entropy",
      "Predictability makes guessing easier",
      "Repetition improves entropy linearly",
      "Visual length is the only metric",
      "Password becomes equivalent to random 20 characters"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: Length alone does not guarantee high entropy AND Predictability makes guessing easier. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 443,
    "questionText": "A PRNG is seeded with current Unix time in seconds. Which are correct?",
    "options": [
      "Seed may be guessable",
      "Output can be brute-forced over likely times",
      "Determinism makes it secure automatically",
      "Long output guarantees high entropy",
      "Timestamp seed is hardware noise"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 04: Cryptography Basics & Entropy",
    "explanation": "Correct answer is: Seed may be guessable AND Output can be brute-forced over likely times. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 444,
    "questionText": "A CSPRNG state leaks at time T. Which are correct?",
    "options": [
      "Future outputs may be predictable if state not refreshed",
      "Good designs try to recover after reseeding",
      "Leaked state has no consequence",
      "Public state is required for security",
      "It proves OTP keys were reused"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 04: Cryptography Basics & Entropy",
    "explanation": "Correct answer is: Future outputs may be predictable if state not refreshed AND Good designs try to recover after reseeding. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 445,
    "questionText": "A Merkle proof verifies one file chunk. Which are correct?",
    "options": [
      "Proof links chunk hash to root",
      "Root digest commits to tree contents",
      "Merkle proof decrypts chunk",
      "Merkle proof proves user identity",
      "Merkle tree requires public/private key pair"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Proof links chunk hash to root AND Root digest commits to tree contents. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 446,
    "questionText": "A website rate-limits login but not password reset requests. Which are correct?",
    "options": [
      "Reset endpoint may still be abused",
      "All credential-related flows need abuse controls",
      "Login rate limit covers every endpoint automatically",
      "Password reset cannot be attacked",
      "Rate limiting makes weak tokens safe"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Reset endpoint may still be abused AND All credential-related flows need abuse controls. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 447,
    "questionText": "A file upload accepts HTML and serves it from trusted domain. Which are correct?",
    "options": [
      "Stored XSS/content sniffing risks may arise",
      "Content-Type and sanitization/isolation matter",
      "Uploads are always safe if over HTTPS",
      "File extension alone proves safety",
      "SQL prepared statements solve all upload risks"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Stored XSS/content sniffing risks may arise AND Content-Type and sanitization/isolation matter. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 448,
    "questionText": "A database allows aggregate queries but hides individual salaries. Which are correct?",
    "options": [
      "Repeated aggregates may allow inference",
      "Query restrictions/noise/thresholds may help",
      "Aggregates can never leak private info",
      "TLS prevents inference attacks",
      "Hashing column names solves inference"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Repeated aggregates may allow inference AND Query restrictions/noise/thresholds may help. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 449,
    "questionText": "A threat model excludes insiders, but system is used by admins. Which are correct?",
    "options": [
      "Security claims may not cover insider attacks",
      "Assumptions should be explicit",
      "Excluding insiders means insiders cannot attack",
      "Threat models are irrelevant once deployed",
      "CIA no longer applies"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 01-02: Security Principles & Models",
    "explanation": "Correct answer is: Security claims may not cover insider attacks AND Assumptions should be explicit. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 450,
    "questionText": "A design adds many public debug endpoints for monitoring. Which are correct?",
    "options": [
      "Attack surface increases",
      "Access control and hardening are needed",
      "Monitoring endpoints cannot leak data",
      "Availability always reduces risk",
      "Debug endpoints should always be unauthenticated"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Attack surface increases AND Access control and hardening are needed. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 451,
    "questionText": "A system has strong encryption but weak password reset. Which are correct?",
    "options": [
      "Weak reset can break account security",
      "End-to-end security depends on all critical layers",
      "Strong encryption alone guarantees account safety",
      "Password reset is outside security",
      "Wooden barrel theory says strongest layer dominates"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Weak reset can break account security AND End-to-end security depends on all critical layers. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 452,
    "questionText": "A server uses MFA but accepts session fixation. Which are correct?",
    "options": [
      "MFA does not fix every session flaw",
      "Session management remains important",
      "MFA means session tokens can be predictable",
      "Authentication replaces authorization",
      "Session fixation is a hash collision"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 07: Web & Auth Attacks",
    "explanation": "Correct answer is: MFA does not fix every session flaw AND Session management remains important. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 453,
    "questionText": "A cloud app encrypts data in application before upload. Which are correct?",
    "options": [
      "Cloud provider may see ciphertext instead of plaintext",
      "App/key handling becomes critical",
      "Application-level encryption removes all access-control needs",
      "Keys can be stored publicly",
      "It is same as no encryption"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: Cloud provider may see ciphertext instead of plaintext AND App/key handling becomes critical. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 454,
    "questionText": "An SSO system authenticates user but app never checks role. Which are correct?",
    "options": [
      "Authentication succeeded but authorization missing",
      "Role/permission checks are still needed",
      "SSO automatically grants least privilege",
      "Login identity proves admin rights",
      "Authorization is same as TLS"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: Authentication succeeded but authorization missing AND Role/permission checks are still needed. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 455,
    "questionText": "A server sends Set-Cookie: session=... without Secure/HttpOnly. Which are correct?",
    "options": [
      "JavaScript access risk is higher without HttpOnly",
      "Cleartext transport risk is higher without Secure if HTTP used",
      "Flags make SQL injection impossible",
      "Flags replace token entropy",
      "Cookie flags are only cosmetic"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 08: Password Storage & SQLi",
    "explanation": "Correct answer is: JavaScript access risk is higher without HttpOnly AND Cleartext transport risk is higher without Secure if HTTP used. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 456,
    "questionText": "A developer uses eval(user_input) in web app. Which are correct?",
    "options": [
      "Code injection risk exists",
      "Avoiding eval and validating input helps",
      "Eval is safe if input is long",
      "TLS prevents eval abuse",
      "Password salts sanitize code"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Code injection risk exists AND Avoiding eval and validating input helps. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 457,
    "questionText": "A blockchain smart contract sends funds before updating balance. Which are correct?",
    "options": [
      "Reentrancy-like risk may exist",
      "Order of state changes and external calls matters",
      "Smart contracts cannot be exploited after deployment",
      "TLS certificate prevents contract bugs",
      "Hashing the code fixes logic bugs automatically"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 09: Consensus & Blockchain",
    "explanation": "Correct answer is: Reentrancy-like risk may exist AND Order of state changes and external calls matters. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 458,
    "questionText": "A miner controls majority hash power. Which are correct?",
    "options": [
      "Double-spend/reorg risk increases",
      "Longest-chain security assumption is weakened",
      "It gives attacker users’ private keys automatically",
      "It breaks SHA-256 preimage resistance directly",
      "It prevents all forks forever"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 09: Consensus & Blockchain",
    "explanation": "Correct answer is: Double-spend/reorg risk increases AND Longest-chain security assumption is weakened. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 459,
    "questionText": "A program property says “this program never leaks secrets.” Which are correct?",
    "options": [
      "It is a semantic property",
      "Perfect automatic decision for all programs is limited by theory",
      "Rice’s theorem guarantees easy complete tool",
      "Testing one input proves it",
      "It is only a DNS property"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: It is a semantic property AND Perfect automatic decision for all programs is limited by theory. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 460,
    "questionText": "A static analyzer is sound but not complete in simplified setting. Which are correct?",
    "options": [
      "It may over-approximate behaviours",
      "It may produce false positives",
      "It necessarily misses all real bugs",
      "It proves every alarm exploitable",
      "Soundness means fast execution"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: It may over-approximate behaviours AND It may produce false positives. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 461,
    "questionText": "A dynamic test suite has high coverage but no security assertions. Which are correct?",
    "options": [
      "Bugs may still be missed",
      "Oracles/assertions matter",
      "Coverage alone proves correctness",
      "Dynamic testing verifies all inputs",
      "Security bugs never need assertions"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Bugs may still be missed AND Oracles/assertions matter. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 462,
    "questionText": "An LLM suggests exploit code against a real third-party site outside permission. Which are correct?",
    "options": [
      "Do not run unauthorised exploit",
      "Use safe lab/reproduction and responsible channel",
      "AI suggestion gives legal permission",
      "Real target exploitation is always acceptable for coursework",
      "Publishing exploit first is best"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 03: LLMs & Android Security",
    "explanation": "Correct answer is: Do not run unauthorised exploit AND Use safe lab/reproduction and responsible channel. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 463,
    "questionText": "A service exposes /health showing DB password and version details. Which are correct?",
    "options": [
      "Sensitive info disclosure risk exists",
      "Debug output should be minimised/protected",
      "Health endpoints can never leak secrets",
      "DB password in output is safe with HTTPS",
      "This is only a UI colour problem"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Sensitive info disclosure risk exists AND Debug output should be minimised/protected. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 464,
    "questionText": "A user ignores certificate warning on captive portal clone. Which are correct?",
    "options": [
      "MITM/phishing risk exists",
      "Certificate warnings indicate trust validation problem",
      "Warning means stronger encryption",
      "Ignoring warning improves authentication",
      "TLS no longer needs CA validation"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 06: TLS & Network Security",
    "explanation": "Correct answer is: MITM/phishing risk exists AND Certificate warnings indicate trust validation problem. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 465,
    "questionText": "A system sends OTP codes by SMS and password only. Which are correct?",
    "options": [
      "This is two-factor if password and phone possession are independent enough",
      "SMS has security weaknesses such as SIM-swap/interception risk",
      "SMS OTP is the same factor as password",
      "OTP codes should be stored plaintext forever",
      "MFA makes phishing impossible"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 04: Cryptography Basics & Entropy",
    "explanation": "Correct answer is: This is two-factor if password and phone possession are independent enough AND SMS has security weaknesses such as SIM-swap/interception risk. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 466,
    "questionText": "A biometric template database is stolen. Which are correct?",
    "options": [
      "Biometrics are hard to revoke/change",
      "Template protection matters",
      "Users can simply change fingerprints like passwords",
      "Biometric leakage has no privacy impact",
      "Fuzzy matching prevents database theft"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 07: Web & Auth Attacks",
    "explanation": "Correct answer is: Biometrics are hard to revoke/change AND Template protection matters. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 467,
    "questionText": "An API uses object ID in URL and checks only login, not ownership. Which are correct?",
    "options": [
      "IDOR/broken access control risk exists",
      "Server must verify object-level authorization",
      "Random-looking IDs alone are full authorization",
      "TLS prevents IDOR",
      "SQL prepared statements always fix ownership checks"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: IDOR/broken access control risk exists AND Server must verify object-level authorization. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 468,
    "questionText": "A developer says “we use SHA-256, so passwords are encrypted.” Which are correct?",
    "options": [
      "Hashing is not encryption",
      "Password hashing should be slow and salted",
      "SHA-256 can be decrypted with private key",
      "Encryption and hashing are identical",
      "Fast hash alone is ideal for passwords"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 10: Review & Revision",
    "explanation": "Correct answer is: Hashing is not encryption AND Password hashing should be slow and salted. This conforms to the security concepts discussed in the coursework slides."
  },
  {
    "id": 469,
    "questionText": "A server uses public-key encryption to send session key but no authentication. Which are correct?",
    "options": [
      "Attacker key substitution may enable MITM",
      "Public key authenticity is required",
      "Public-key encryption automatically proves identity without binding",
      "CAs are irrelevant to key authenticity",
      "Session key must be public"
    ],
    "correctAnswers": [
      0,
      1
    ],
    "type": "maq",
    "category": "Week 07: Web & Auth Attacks",
    "explanation": "Correct answer is: Attacker key substitution may enable MITM AND Public key authenticity is required. This conforms to the security concepts discussed in the coursework slides."
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { questionBank };
}
