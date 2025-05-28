
// Polyfills for older browsers
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function(s) {
    var el = this;
    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}

/**
 * Deal Performance Audit - salesCraft
 * https://bustercall.substack.com/
 * 
 * Tool premium pour diagnostiquer les deals B2B
 */


        // Questions Data
        const questions = [
            {
                id: 1,
                title: "Dans quel secteur évolue ton prospect ?",
                subtitle: "Cela m'aide à adapter les benchmarks et conseils",
                type: "single",
                options: [
                    "SaaS / Tech",
                    "Services professionnels",
                    "Industrie / Manufacturing",
                    "Finance / Banque",
                    "Santé / Pharmaceutique",
                    "E-commerce / Retail",
                    "Éducation",
                    "Autre"
                ]
            },
            {
                id: 2,
                title: "Quel est le montant estimé de ton deal ?",
                subtitle: "Montant annuel récurrent ou one-shot",
                type: "single",
                options: [
                    "20k€ - 50k€",
                    "50k€ - 100k€",
                    "100k€ - 250k€",
                    "250k€ - 500k€",
                    "500k€+",
                    "Je préfère ne pas dire"
                ]
            },
            {
                id: 3,
                title: "As-tu cartographié le comité de décision complet ?",
                subtitle: "Décideur économique, utilisateurs finaux, influenceurs techniques, acheteur",
                type: "single",
                options: [
                    "Oui, j'ai identifié tous les acteurs clés",
                    "Partiellement, il me manque des informations",
                    "Non, je connais que 1-2 personnes",
                    "Je ne sais pas comment m'y prendre"
                ]
            },
            {
                id: 4,
                title: "Ton champion a-t-il le pouvoir d'influencer la décision finale ?",
                subtitle: "Un champion efficace doit avoir crédibilité + accès au décideur",
                type: "single",
                options: [
                    "Oui, il a l'oreille du décideur",
                    "Plutôt oui, mais son influence est limitée",
                    "Non, c'est plus un contact qu'un champion",
                    "Je n'ai pas encore identifié de champion"
                ]
            },
            {
                id: 5,
                title: "Le budget a-t-il été confirmé et qualifié ?",
                subtitle: "Budget alloué, process d'approbation, autorité de signature",
                type: "single",
                options: [
                    "Budget confirmé et processus connu",
                    "Budget évoqué mais pas formalisé",
                    "Pas encore abordé directement",
                    "Budget insuffisant identifié"
                ]
            },
            {
                id: 6,
                title: "Quels pain points business as-tu quantifiés ?",
                subtitle: "Impact financier, coût de l'inaction, métriques actuelles",
                type: "multiple",
                options: [
                    "Perte de chiffre d'affaires quantifiée",
                    "Coûts opérationnels excessifs identifiés",
                    "Perte de productivité mesurée",
                    "Risques de conformité/sécurité",
                    "Opportunités de croissance ratées",
                    "Aucun pain point clairement quantifié"
                ]
            },
            {
                id: 7,
                title: "Le processus de décision formel est-il défini ?",
                subtitle: "Étapes, critères d'évaluation, timeline, personnes impliquées à chaque phase",
                type: "single",
                options: [
                    "Processus complet mappé avec timeline",
                    "Grandes étapes connues",
                    "Processus flou, en cours de définition",
                    "Aucune visibilité sur le processus",
                    "Processus informel/décision rapide"
                ]
            },
            {
                id: 8,
                title: "As-tu identifié et positionné la concurrence ?",
                subtitle: "Concurrents en lice, leurs forces/faiblesses, ta différenciation",
                type: "single",
                options: [
                    "Concurrence identifiée et positionnement clair",
                    "Concurrence connue mais positionnement à affiner",
                    "Concurrence partiellement identifiée",
                    "Aucune visibilité sur la concurrence"
                ]
            },
            {
                id: 9,
                title: "Une next step claire a-t-elle été posée et confirmée ?",
                subtitle: "Date précise, participants, objectifs de la prochaine étape",
                type: "single",
                options: [
                    "Next step définie avec date et participants",
                    "Next step évoquée mais pas formalisée",
                    "Pas de next step claire",
                    "En attente de leur retour"
                ]
            },
            {
                id: 10,
                title: "Le prospect arrive-t-il à se projeter avec ta solution ?",
                subtitle: "Vision d'achat créée, bénéfices concrets imaginés",
                type: "single",
                options: [
                    "Il se projette clairement et verbalise les bénéfices",
                    "Il commence à envisager l'impact",
                    "Il reste sur des généralités",
                    "Aucune projection pour le moment"
                ]
            },
            {
                id: 11,
                title: "As-tu identifié les conséquences du status quo ?",
                subtitle: "Coût de l'inaction, risques business, opportunités manquées",
                type: "single",
                options: [
                    "Conséquences clairement établies et acceptées",
                    "Partiellement identifiées",
                    "Évoquées mais pas approfondies",
                    "Je ne sais pas comment creuser ce point"
                ]
            },
            {
                id: 12,
                title: "Dans quelle position es-tu face à la concurrence ?",
                subtitle: "Ta position concurrentielle sur ce deal spécifique",
                type: "single",
                options: [
                    "Premier contact / Découvreur du besoin",
                    "En réponse à un appel d'offres structuré",
                    "Recommandé par un partenaire/client",
                    "Arrivé après d'autres concurrents",
                    "Je ne sais pas évaluer ma position"
                ]
            },
            {
                id: 13,
                title: "Quels sont les principaux obstacles identifiés ?",
                subtitle: "Freins potentiels qui pourraient bloquer ton deal",
                type: "multiple",
                options: [
                    "Budget insuffisant ou non alloué",
                    "Timeline trop courte ou inadéquate",
                    "Concurrence très agressive",
                    "Processus de décision complexe",
                    "Résistance technique/IT",
                    "Changement d'organisation en cours",
                    "Aucun obstacle majeur identifié"
                ]
            },
            {
                id: 14,
                title: "Le ROI/business case a-t-il été validé ?",
                subtitle: "Retour sur investissement chiffré et approuvé par les finances",
                type: "single",
                options: [
                    "ROI validé par les équipes financières",
                    "ROI présenté mais en attente de validation",
                    "ROI en cours de construction",
                    "ROI pas encore abordé"
                ]
            },
            {
                id: 15,
                title: "Un plan d'action mutuel est-il en place ?",
                subtitle: "Étapes claires, responsabilités partagées, deadlines définies",
                type: "single",
                options: [
                    "Plan d'action détaillé et suivi",
                    "Plan global défini",
                    "Étapes évoquées mais pas formalisées",
                    "Aucun plan d'action mutuel"
                ]
            }
        ];

        // State Management
        let currentQuestion = 0;
        let answers = {};
        let userProfile = {};
        let touchStartX = 0;
        let touchEndX = 0;

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            setupMobileOptimizations();
            setupKeyboardShortcuts();
        });

        function setupMobileOptimizations() {
            // Touch navigation
            const questionCard = document.getElementById('question-card');
            questionCard.addEventListener('touchstart', handleTouchStart, {passive: true});
            questionCard.addEventListener('touchend', handleTouchEnd, {passive: true});
            
            // Show swipe hint on mobile
            if (window.innerWidth <= 768) {
                setTimeout(() => {
                    const hint = document.getElementById('swipe-hint');
                    hint.style.opacity = '1';
                    setTimeout(() => hint.style.opacity = '0', 3000);
                }, 1000);
            }
        }

        function setupKeyboardShortcuts() {
            document.addEventListener('keydown', function(e) {
                if (document.getElementById('questions-container').classList.contains('hidden')) return;
                
                const key = parseInt(e.key);
                if (key >= 1 && key <= 4) {
                    e.preventDefault();
                    selectOption(key - 1);
                } else if (e.key === 'ArrowRight' || e.key === 'Enter') {
                    e.preventDefault();
                    nextQuestion();
                } else if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    previousQuestion();
                }
            });
        }

        function handleTouchStart(e) {
            touchStartX = e.changedTouches[0].clientX;
        }

        function handleTouchEnd(e) {
            touchEndX = e.changedTouches[0].clientX;
            handleSwipe();
        }

        function handleSwipe() {
            const swipeThreshold = 50;
            const swipeDistance = touchEndX - touchStartX;
            
            if (Math.abs(swipeDistance) > swipeThreshold) {
                // Add haptic feedback if available
                if (navigator.vibrate) {
                    navigator.vibrate(10);
                }
                
                if (swipeDistance > 0 && currentQuestion > 0) {
                    previousQuestion();
                } else if (swipeDistance < 0 && answers[currentQuestion]) {
                    nextQuestion();
                }
            }
        }

        function startAudit() {
            document.getElementById('hero').style.display = 'none';
            document.getElementById('progress-container').classList.remove('hidden');
            document.getElementById('questions-container').classList.remove('hidden');
            loadQuestion(0);
        }

        function loadQuestion(index) {
            const question = questions[index];
            
            document.getElementById('question-title').textContent = question.title;
            document.getElementById('question-subtitle').textContent = question.subtitle;
            
            // Update progress
            const progress = ((index + 1) / questions.length) * 100;
            document.getElementById('progress-bar').style.width = progress + '%';
            document.getElementById('progress-text').textContent = `Question ${index + 1}/${questions.length}`;
            
            // Load options
            const optionsContainer = document.getElementById('options-container');
            optionsContainer.innerHTML = '';
            
            question.options.forEach((option, optionIndex) => {
                const button = document.createElement('button');
                button.className = 'option-btn w-full text-left';
                button.innerHTML = `
                    <div class="flex items-center">
                        <span class="w-6 h-6 rounded-full border-2 border-gray-300 mr-3 flex items-center justify-center text-sm font-semibold">${optionIndex + 1}</span>
                        ${option}
                    </div>
                `;
                button.onclick = () => selectOption(optionIndex, question.type);
                optionsContainer.appendChild(button);
            });
            
            // Update navigation buttons
            document.getElementById('prev-btn').style.display = index > 0 ? 'block' : 'none';
            document.getElementById('next-btn').disabled = !answers[index];
            
            // Animation
            const card = document.getElementById('question-card');
            card.classList.remove('active');
            setTimeout(() => card.classList.add('active'), 50);
        }

        function selectOption(optionIndex, type = 'single') {
            const question = questions[currentQuestion];
            const buttons = document.querySelectorAll('.option-btn');
            
            if (type === 'multiple') {
                // Multiple choice logic
                if (!answers[currentQuestion]) answers[currentQuestion] = [];
                
                const optionValue = question.options[optionIndex];
                const currentAnswers = answers[currentQuestion];
                
                if (currentAnswers.includes(optionValue)) {
                    // Remove if already selected
                    answers[currentQuestion] = currentAnswers.filter(a => a !== optionValue);
                    buttons[optionIndex].classList.remove('selected');
                } else {
                    // Add to selection
                    answers[currentQuestion].push(optionValue);
                    buttons[optionIndex].classList.add('selected');
                }
            } else {
                // Single choice logic
                buttons.forEach(btn => btn.classList.remove('selected'));
                buttons[optionIndex].classList.add('selected');
                answers[currentQuestion] = question.options[optionIndex];
            }
            
            // Enable next button
            document.getElementById('next-btn').disabled = false;
            
            // Haptic feedback
            if (navigator.vibrate) {
                navigator.vibrate(5);
            }
        }

        function nextQuestion() {
            if (!answers[currentQuestion]) return;
            
            if (currentQuestion < questions.length - 1) {
                currentQuestion++;
                loadQuestion(currentQuestion);
            } else {
                showResults();
            }
        }

        function previousQuestion() {
            if (currentQuestion > 0) {
                currentQuestion--;
                loadQuestion(currentQuestion);
            }
        }

        function showResults() {
            document.getElementById('questions-container').style.display = 'none';
            document.getElementById('progress-container').style.display = 'none';
            document.getElementById('results-container').classList.remove('hidden');
            
            // Calculate and display results
            calculateScore();
            generateAdvice();
            generateActionPlan();
            generateTimeline();
            generateChampionAdvice();
            generateEmailForm();
            createRadarChart();
        }

        function calculateScore() {
            let totalScore = 0;
            let maxScore = 0;
            
            // Scoring logic based on answers
            Object.keys(answers).forEach(questionIndex => {
                const answer = answers[questionIndex];
                const question = questions[questionIndex];
                
                if (Array.isArray(answer)) {
                    // Multiple choice scoring
                    if (answer.includes("Aucun pain point clairement quantifié") || 
                        answer.includes("Aucun obstacle majeur identifié")) {
                        totalScore += 1;
                    } else {
                        totalScore += Math.min(answer.length * 2, 10);
                    }
                    maxScore += 10;
                } else {
                    // Single choice scoring
                    if (answer.includes("Oui") || answer.includes("confirmé") || answer.includes("complet") || answer.includes("clairement")) {
                        totalScore += 10;
                    } else if (answer.includes("Partiellement") || answer.includes("évoqué") || answer.includes("Plutôt")) {
                        totalScore += 6;
                    } else if (answer.includes("Non") || answer.includes("Aucun") || answer.includes("ne sais pas")) {
                        totalScore += 2;
                    } else {
                        totalScore += 4;
                    }
                    maxScore += 10;
                }
            });
            
            const percentage = Math.round((totalScore / maxScore) * 100);
            
            // Display score
            const scoreElement = document.getElementById('score-value');
            const scoreCircle = document.getElementById('score-circle');
            const statusElement = document.getElementById('score-status');
            const benchmarkElement = document.getElementById('benchmark-text');
            
            scoreElement.textContent = percentage + '%';
            
            if (percentage >= 80) {
                scoreCircle.style.background = 'var(--green)';
                statusElement.textContent = 'Deal Excellence';
                statusElement.style.color = 'var(--green)';
                benchmarkElement.textContent = `Ton deal performe mieux que 91% des deals ${answers[0]} de même taille`;
            } else if (percentage >= 60) {
                scoreCircle.style.background = 'var(--blue)';
                statusElement.textContent = 'Deal Prometteur';
                statusElement.style.color = 'var(--blue)';
                benchmarkElement.textContent = `Ton deal performe mieux que 73% des deals ${answers[0]} de même taille`;
            } else if (percentage >= 40) {
                scoreCircle.style.background = 'var(--yellow)';
                statusElement.textContent = 'Deal à Risque';
                statusElement.style.color = '#d69e2e';
                benchmarkElement.textContent = `Ton deal performe comme 45% des deals ${answers[0]} de même taille`;
            } else {
                scoreCircle.style.background = 'var(--orange)';
                statusElement.textContent = 'Deal Critique';
                statusElement.style.color = 'var(--orange)';
                benchmarkElement.textContent = `Ton deal sous-performe vs 68% des deals ${answers[0]} de même taille`;
            }
            
            userProfile.score = percentage;
            userProfile.sector = answers[0];
            userProfile.dealSize = answers[1];
        }

        function generateAdvice() {
            const adviceContainer = document.getElementById('strategic-advice');
            const score = userProfile.score;
            let advice = [];
            
            // Generate personalized advice based on answers
            if (!answers[2] || answers[2].includes("Non") || answers[2].includes("ne sais pas")) {
                advice.push({
                    icon: 'fas fa-users',
                    title: 'Cartographie ton comité de décision',
                    content: `Écoute, tu ne peux pas vendre dans le brouillard. Tu dois absolument mapper qui décide quoi. Lance-toi un défi : avant la fin de la semaine, identifie le décideur économique final, les utilisateurs clés et l'acheteur technique. Commence par ton champion actuel et demande-lui : "Pour que ce projet réussisse, qui d'autre devrait être impliqué dans les discussions ?" Puis creuse le process de validation interne.`
                });
            }
            
            if (!answers[3] || answers[3].includes("Non") || answers[3].includes("contact")) {
                advice.push({
                    icon: 'fas fa-crown',
                    title: 'Transforme ton contact en champion',
                    content: `Ton contact actuel n'est pas encore ton champion. Un vrai champion, c'est quelqu'un qui vend pour toi quand tu n'es pas dans la pièce. Voici comment l'activer : partage-lui une success story similaire à sa situation, donne-lui des arguments pour défendre le projet en interne, et surtout, aide-le à briller devant sa hiérarchie. Dis-lui : "Comment je peux t'aider à présenter ça à ton boss de manière à ce que tu aies l'air d'un héros ?"`
                });
            }
            
            if (!answers[8] || answers[8].includes("Pas de next step")) {
                advice.push({
                    icon: 'fas fa-calendar-check',
                    title: 'Impose ton rythme commercial',
                    content: `Tu laisses trop de flou sur les prochaines étapes. Dans la vente complexe, celui qui contrôle l'agenda contrôle le deal. Utilise cette phrase magique : "Pour respecter vos contraintes de mise en œuvre, nous devrons boucler la validation technique avant le X. Quel jour vous convient pour organiser ça ?" Ne ressors JAMAIS d'un rendez-vous sans avoir calé la suite. Le "on se tient au courant", c'est la mort du commercial.`
                });
            }
            
            if (score < 50) {
                advice.push({
                    icon: 'fas fa-exclamation-triangle',
                    title: 'Reset stratégique urgent',
                    content: `Ton deal est en zone rouge. Il faut un reset complet. Organise une réunion "checkpoint" avec ton champion principal. Script : "J'ai l'impression qu'on a peut-être raté quelque chose dans notre approche. Aide-moi à comprendre ce qui freine vraiment la décision côté interne." Puis reconstruis étape par étape : requalifie le besoin, re-valide le budget, re-mappe les décideurs. Parfois, redémarrer proprement vaut mieux que de s'entêter sur un deal mal engagé.`
                });
            }
            
            // Display advice
            adviceContainer.innerHTML = '';
            advice.forEach(item => {
                const adviceCard = document.createElement('div');
                adviceCard.className = 'bg-gray-50 p-6 rounded-lg border-l-4';
                adviceCard.style.borderLeftColor = 'var(--blue)';
                adviceCard.innerHTML = `
                    <div class="flex items-start space-x-4">
                        <i class="${item.icon} text-xl" style="color: var(--blue);"></i>
                        <div>
                            <h4 class="font-bold text-gray-900 mb-2">${item.title}</h4>
                            <p class="text-gray-700 leading-relaxed">${item.content}</p>
                        </div>
                    </div>
                `;
                adviceContainer.appendChild(adviceCard);
            });
        }

        function generateActionPlan() {
            const actionContainer = document.getElementById('action-plan');
            const score = userProfile.score;
            let actions = [];
            
            // Generate action plan based on score and missing elements
            if (score < 40) {
                actions = [
                    {
                        priority: 'URGENT',
                        title: 'Audit complet du deal',
                        timeline: 'Cette semaine',
                        action: `Organise un "deal review" avec ton manager. Liste tout ce qui cloche : manque-t-il un vrai champion ? Le budget est-il fantôme ? Y a-t-il des signaux politiques que tu as ratés ? Sois honnête sur l'état réel du deal.`
                    },
                    {
                        priority: 'CRITIQUE',
                        title: 'Reset meeting avec le prospect',
                        timeline: 'Dans 7 jours max',
                        action: `Appelle ton contact principal et dis : "J'aimerais qu'on fasse le point ensemble pour s'assurer qu'on est alignés sur vos priorités et notre approche. Quand pouvez-vous me donner 30 minutes ?" Utilise cette réunion pour tout remettre à plat.`
                    },
                    {
                        priority: 'HAUTE',
                        title: 'Requalification complète',
                        timeline: 'Semaine 2',
                        action: `Reprends les bases : requalifie le besoin avec la méthode BANT. Budget réel ? Authority mappée ? Need confirmé ? Timeline réaliste ? Si une des 4 lettres foire, tu n'as pas un deal, tu as une perte de temps.`
                    }
                ];
            } else if (score < 70) {
                actions = [
                    {
                        priority: 'HAUTE',
                        title: 'Accélère la qualification',
                        timeline: 'Semaine 1',
                        action: `Tu as les bases mais il manque de la profondeur. Organise des calls individuels avec 2-3 stakeholders clés. Objective : comprendre leurs enjeux personnels et comment ton projet les aide dans leur quotidien.`
                    },
                    {
                        priority: 'MOYENNE',
                        title: 'Business case collaboratif',
                        timeline: 'Semaine 2-3',
                        action: `Co-construis le ROI avec ton champion. Dis-lui : "Aidez-moi à chiffrer l'impact pour être sûr qu'on présente ça correctement à votre direction." Quand ils participent au calcul, ils s'approprient le résultat.`
                    },
                    {
                        priority: 'MOYENNE',
                        title: 'Mapping concurrentiel',
                        timeline: 'En continu',
                        action: `Creuse qui d'autre ils regardent. Question directe : "Pour que je vous présente notre différenciation de manière pertinente, quels autres acteurs evaluez-vous ?" Puis adapte ton discours en conséquence.`
                    }
                ];
            } else {
                actions = [
                    {
                        priority: 'OPTIMISATION',
                        title: 'Accélération finale',
                        timeline: 'Semaine 1',
                        action: `Ton deal est bien engagé. Focus sur l'accélération : propose une POC express ou un pilot restreint pour rassurer les derniers sceptiques. "Et si on testait sur un périmètre réduit pour valider l'approche ?"`
                    },
                    {
                        priority: 'SECURING',
                        title: 'Verrouillage juridique',
                        timeline: 'Semaine 2',
                        action: `Anticipe les contraintes légales/procurement. Demande : "Quel est votre process habituel pour ce type de contrat ?" et "Quels éléments juridiques dois-je préparer ?" Tu éviteras les mauvaises surprises de dernière minute.`
                    },
                    {
                        priority: 'CLOSING',
                        title: 'Orchestration finale',
                        timeline: 'Semaine 3-4',
                        action: `Organise THE réunion de décision avec tous les décideurs. Présente un recap du projet, les bénéfices validés, et termine par : "Avez-vous tout ce qu'il faut pour prendre la décision ?" Si oui, close. Si non, identifie précisément ce qui manque.`
                    }
                ];
            }
            
            // Display action plan
            actionContainer.innerHTML = '';
            actions.forEach((action, index) => {
                const actionCard = document.createElement('div');
                actionCard.className = 'timeline-item bg-white p-6 rounded-lg shadow-sm';
                
                let priorityColor = 'var(--orange)';
                if (action.priority === 'MOYENNE') priorityColor = 'var(--yellow)';
                if (action.priority === 'OPTIMISATION' || action.priority === 'SECURING') priorityColor = 'var(--green)';
                if (action.priority === 'CLOSING') priorityColor = 'var(--blue)';
                
                actionCard.innerHTML = `
                    <div class="flex items-start justify-between mb-3">
                        <span class="inline-block px-3 py-1 rounded-full text-sm font-semibold text-white" style="background: ${priorityColor};">
                            ${action.priority}
                        </span>
                        <span class="text-sm text-gray-500">${action.timeline}</span>
                    </div>
                    <h4 class="font-bold text-gray-900 mb-2">${action.title}</h4>
                    <p class="text-gray-700 leading-relaxed">${action.action}</p>
                `;
                actionContainer.appendChild(actionCard);
            });
        }

        function generateTimeline() {
            const timelineContainer = document.getElementById('timeline-predictor');
            const sector = answers[0];
            const dealSize = answers[1];
            const score = userProfile.score;
            
            // Calculate timeline based on sector and deal size
            let baseTimeline = 3; // months
            if (dealSize && dealSize.includes('250k€+')) baseTimeline = 6;
            if (dealSize && dealSize.includes('500k€+')) baseTimeline = 9;
            if (sector === 'Finance / Banque') baseTimeline += 2;
            if (sector === 'Santé / Pharmaceutique') baseTimeline += 3;
            
            // Adjust based on score
            let optimisticTimeline = Math.max(1, baseTimeline - 1);
            let realisticTimeline = baseTimeline;
            let pessimisticTimeline = baseTimeline + 2;
            
            if (score < 40) {
                optimisticTimeline += 2;
                realisticTimeline += 3;
                pessimisticTimeline += 5;
            }
            
            // Calculate probability
            let closingProbability = Math.min(95, Math.max(15, score + 10));
            
            timelineContainer.innerHTML = `
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="space-y-4">
                        <div class="bg-green-50 p-4 rounded-lg border border-green-200">
                            <div class="flex items-center justify-between mb-2">
                                <span class="font-semibold text-green-800">Timeline optimiste</span>
                                <span class="text-green-600">${optimisticTimeline} mois</span>
                            </div>
                            <p class="text-sm text-green-700">Si tout se passe parfaitement</p>
                        </div>
                        
                        <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
                            <div class="flex items-center justify-between mb-2">
                                <span class="font-semibold text-blue-800">Timeline réaliste</span>
                                <span class="text-blue-600">${realisticTimeline} mois</span>
                            </div>
                            <p class="text-sm text-blue-700">Moyenne pour ton secteur</p>
                        </div>
                        
                        <div class="bg-orange-50 p-4 rounded-lg border border-orange-200">
                            <div class="flex items-center justify-between mb-2">
                                <span class="font-semibold text-orange-800">Timeline pessimiste</span>
                                <span class="text-orange-600">${pessimisticTimeline} mois</span>
                            </div>
                            <p class="text-sm text-orange-700">Si obstacles imprévus</p>
                        </div>
                    </div>
                    
                    <div class="space-y-4">
                        <div class="text-center p-6 bg-gray-50 rounded-lg">
                            <div class="text-3xl font-bold text-gray-900 mb-2">${closingProbability}%</div>
                            <div class="text-gray-600">Probabilité de closing</div>
                            <div class="text-sm text-gray-500 mt-2">vs ${Math.max(25, closingProbability - 20)}% moyenne secteur</div>
                        </div>
                        
                        <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                            <h4 class="font-semibold text-yellow-800 mb-2">⚠️ Facteurs de risque</h4>
                            <ul class="text-sm text-yellow-700 space-y-1">
                                ${score < 50 ? '<li>• Qualification incomplète détectée</li>' : ''}
                                ${dealSize && dealSize.includes('500k€+') ? '<li>• Deal complexe = cycles longs</li>' : ''}
                                ${sector === 'Finance / Banque' ? '<li>• Secteur bancaire = process rigide</li>' : ''}
                                ${!answers[6] || answers[6].includes('Aucun') ? '<li>• ROI non établi = décision retardée</li>' : ''}
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        }

        function generateChampionAdvice() {
            const championContainer = document.getElementById('champion-activator');
            const championAnswer = answers[3];
            
            let championScore = 0;
            if (championAnswer && championAnswer.includes('oreille du décideur')) championScore = 90;
            else if (championAnswer && championAnswer.includes('influence limitée')) championScore = 60;
            else if (championAnswer && championAnswer.includes('contact')) championScore = 30;
            else championScore = 10;
            
            championContainer.innerHTML = `
                <div class="mb-6">
                    <div class="flex items-center justify-between mb-3">
                        <span class="text-lg font-semibold">Champion Readiness Score</span>
                        <span class="champion-score">${championScore}%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                        <div class="h-2 rounded-full transition-all duration-500" style="width: ${championScore}%; background: var(--green);"></div>
                    </div>
                </div>
                
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 class="font-bold text-gray-900 mb-4">✅ Checklist Champion Parfait</h4>
                        <div class="space-y-2 text-sm">
                            <label class="flex items-center">
                                <input type="checkbox" ${championScore > 70 ? 'checked' : ''} class="mr-2">
                                <span>A accès au décideur final</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" ${championScore > 50 ? 'checked' : ''} class="mr-2">
                                <span>Comprend ton value proposition</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" ${championScore > 30 ? 'checked' : ''} class="mr-2">
                                <span>A un intérêt personnel au succès</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" class="mr-2">
                                <span>Partage des infos internes</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" class="mr-2">
                                <span>Te prévient des obstacles</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" class="mr-2">
                                <span>Vend pour toi en ton absence</span>
                            </label>
                        </div>
                    </div>
                    
                    <div>
                        <h4 class="font-bold text-gray-900 mb-4">🎯 Scripts d'Activation</h4>
                        <div class="space-y-4">
                            <div class="bg-blue-50 p-4 rounded-lg">
                                <h5 class="font-semibold text-blue-800 mb-2">Pour créer de l'urgence :</h5>
                                <p class="text-sm text-blue-700">"${championAnswer && championAnswer.includes('contact') ? 'Comme tu connais bien les enjeux internes' : 'Avec ton expertise du secteur'}, peux-tu m'aider à comprendre quel serait l'impact si vous ne réglez pas ça avant la fin d'année ?"</p>
                            </div>
                            
                            <div class="bg-green-50 p-4 rounded-lg">
                                <h5 class="font-semibold text-green-800 mb-2">Pour l'impliquer :</h5>
                                <p class="text-sm text-green-700">"Comment je peux t'aider à présenter ça à ton équipe de manière à ce que tu aies l'air d'un héros ?"</p>
                            </div>
                            
                            <div class="bg-yellow-50 p-4 rounded-lg">
                                <h5 class="font-semibold text-yellow-800 mb-2">Pour tester son engagement :</h5>
                                <p class="text-sm text-yellow-700">"Si tu étais à ma place, quelle serait ta prochaine étape pour faire avancer ce projet ?"</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        function generateEmailForm() {
            const emailFormContainer = document.getElementById('email-form');
            
            emailFormContainer.innerHTML = `
                <div class="bg-blue-50 p-4 rounded-lg mb-6">
                    <h4 class="font-semibold text-blue-800 mb-2">💡 Pourquoi tant de contexte ?</h4>
                    <p class="text-sm text-blue-700">Pour que tes emails soient percutants et personnalisés, j'ai besoin de comprendre précisément ta situation. Plus tu me donnes d'infos, plus mes suggestions seront actionnables.</p>
                </div>
                
                <div class="grid md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-2">Nom du prospect *</label>
                        <input type="text" id="prospect-name" class="w-full p-3 border border-gray-300 rounded-lg" placeholder="Ex: Marie Dupont">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-2">Entreprise *</label>
                        <input type="text" id="prospect-company" class="w-full p-3 border border-gray-300 rounded-lg" placeholder="Ex: TechCorp">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-2">Stade actuel du deal *</label>
                        <select id="deal-stage" class="w-full p-3 border border-gray-300 rounded-lg">
                            <option value="">Choisir...</option>
                            <option value="discovery">Discovery / Qualification</option>
                            <option value="demo">Démonstration / Présentation</option>
                            <option value="poc">POC / Test technique</option>
                            <option value="negotiation">Négociation / Pricing</option>
                            <option value="closing">Closing / Signature</option>
                        </select>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-2">Dernière interaction</label>
                        <select id="last-interaction" class="w-full p-3 border border-gray-300 rounded-lg">
                            <option value="demo-positive">Démo bien reçue</option>
                            <option value="meeting-questions">Réunion avec questions</option>
                            <option value="proposal-sent">Proposition envoyée</option>
                            <option value="objection-raised">Objection soulevée</option>
                            <option value="silence">Silence radio</option>
                            <option value="positive-feedback">Feedback positif</option>
                        </select>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-2">Principale objection/frein</label>
                        <select id="main-objection" class="w-full p-3 border border-gray-300 rounded-lg">
                            <option value="">Aucune objection pour le moment</option>
                            <option value="budget">Budget / Coût trop élevé</option>
                            <option value="timing">Timeline / Pas le bon moment</option>
                            <option value="competition">Préfère un concurrent</option>
                            <option value="technical">Contraintes techniques</option>
                            <option value="change-management">Résistance au changement</option>
                            <option value="decision-process">Process de décision complexe</option>
                        </select>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-2">Profil personnalité</label>
                        <select id="personality-type" class="w-full p-3 border border-gray-300 rounded-lg">
                            <option value="analytical">Analytique (data-driven)</option>
                            <option value="relational">Relationnel (people-focused)</option>
                            <option value="decisive">Décideur (résultats)</option>
                            <option value="technical">Technique (détails)</option>
                        </select>
                    </div>
                    
                    <div class="md:col-span-2">
                        <label class="block text-sm font-semibold text-gray-700 mb-2">Pain point business principal</label>
                        <textarea id="pain-point" rows="3" class="w-full p-3 border border-gray-300 rounded-lg" placeholder="Ex: Perte de 2h/jour par employé à cause de process manuel, soit 50k€/an de productivité perdue"></textarea>
                    </div>
                    
                    <div class="md:col-span-2">
                        <label class="block text-sm font-semibold text-gray-700 mb-2">Bénéfice/ROI mis en avant</label>
                        <textarea id="roi-benefit" rows="3" class="w-full p-3 border border-gray-300 rounded-lg" placeholder="Ex: Automatisation = gain de 30% de productivité + ROI de 250% en 18 mois"></textarea>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-2">Ton de communication</label>
                        <select id="communication-tone" class="w-full p-3 border border-gray-300 rounded-lg">
                            <option value="formal">Formel / Corporate</option>
                            <option value="friendly">Amical / Décontracté</option>
                            <option value="direct">Direct / Business</option>
                            <option value="consultative">Consultatif / Expert</option>
                        </select>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-2">Votre relation</label>
                        <select id="relationship-level" class="w-full p-3 border border-gray-300 rounded-lg">
                            <option value="new">Nouveau contact</option>
                            <option value="developing">Relation en développement</option>
                            <option value="established">Relation établie</option>
                            <option value="champion">Champion identifié</option>
                        </select>
                    </div>
                </div>
                
                <div class="mt-6 text-center">
                    <button onclick="generateEmailSequences()" class="btn-primary text-lg px-8 py-4">
                        <i class="fas fa-magic mr-2"></i>
                        Générer mes 5 emails personnalisés
                    </button>
                </div>
            `;
        }

        function generateEmailSequences() {
            // Get form data
            const prospectName = document.getElementById('prospect-name').value;
            const prospectCompany = document.getElementById('prospect-company').value;
            const dealStage = document.getElementById('deal-stage').value;
            const lastInteraction = document.getElementById('last-interaction').value;
            const mainObjection = document.getElementById('main-objection').value;
            const personalityType = document.getElementById('personality-type').value;
            const painPoint = document.getElementById('pain-point').value;
            const roiBenefit = document.getElementById('roi-benefit').value;
            const communicationTone = document.getElementById('communication-tone').value;
            const relationshipLevel = document.getElementById('relationship-level').value;
            
            if (!prospectName || !prospectCompany || !dealStage) {
                alert('Merci de remplir au minimum le nom, l\'entreprise et le stade du deal');
                return;
            }
            
            // Generate personalized email sequences
            const emailSequencesContainer = document.getElementById('email-sequences');
            emailSequencesContainer.classList.remove('hidden');
            emailSequencesContainer.innerHTML = generatePersonalizedEmails({
                prospectName, prospectCompany, dealStage, lastInteraction, 
                mainObjection, personalityType, painPoint, roiBenefit, 
                communicationTone, relationshipLevel
            });
            
            // Scroll to emails
            emailSequencesContainer.scrollIntoView({ behavior: 'smooth' });
        }

        function generatePersonalizedEmails(context) {
            const emails = [];
            const tone = getToneSettings(context.communicationTone);
            const timing = getTimingByStage(context.dealStage);
            
            // Email 1: Immediate follow-up
            emails.push({
                day: timing.email1,
                subject: generateSubject(context, 1),
                body: generateEmailBody(context, 1)
            });
            
            // Email 2: Value reinforcement
            emails.push({
                day: timing.email2,
                subject: generateSubject(context, 2),
                body: generateEmailBody(context, 2)
            });
            
            // Email 3: Social proof
            emails.push({
                day: timing.email3,
                subject: generateSubject(context, 3),
                body: generateEmailBody(context, 3)
            });
            
            // Email 4: Urgency/Scarcity
            emails.push({
                day: timing.email4,
                subject: generateSubject(context, 4),
                body: generateEmailBody(context, 4)
            });
            
            // Email 5: Last attempt
            emails.push({
                day: timing.email5,
                subject: generateSubject(context, 5),
                body: generateEmailBody(context, 5)
            });
            
            let html = '<h4 class="text-xl font-bold text-gray-900 mb-6">📧 Tes 5 emails personnalisés</h4>';
            
            emails.forEach((email, index) => {
                html += `
                    <div class="border border-gray-200 rounded-lg p-6 mb-4">
                        <div class="flex items-center justify-between mb-4">
                            <h5 class="font-bold text-gray-900">Email ${index + 1} - ${email.day}</h5>
                            <button onclick="copyEmail(${index})" class="text-sm text-blue-600 hover:text-blue-800">
                                <i class="fas fa-copy mr-1"></i>Copier
                            </button>
                        </div>
                        
                        <div class="email-preview mb-4">
                            <div class="border-b border-gray-200 pb-2 mb-3">
                                <strong>Sujet:</strong> ${email.subject}
                            </div>
                            <div class="whitespace-pre-line">${email.body}</div>
                        </div>
                        
                        <div class="text-xs text-gray-500">
                            💡 <strong>Conseil d'envoi:</strong> ${getEmailTip(index + 1, context)}
                        </div>
                    </div>
                `;
            });
            
            html += `
                <div class="bg-green-50 p-4 rounded-lg border border-green-200 mt-6">
                    <h4 class="font-semibold text-green-800 mb-2">✅ Tes emails sont prêts !</h4>
                    <p class="text-sm text-green-700">Copie-colle et adapte selon ton style. N'oublie pas de tracker les ouvertures et réponses pour optimiser tes prochaines séquences.</p>
                </div>
            `;
            
            return html;
        }

        function getToneSettings(tone) {
            const tones = {
                'formal': { greeting: 'Monsieur/Madame', closing: 'Cordialement' },
                'friendly': { greeting: 'Bonjour', closing: 'Bien à vous' },
                'direct': { greeting: 'Bonjour', closing: 'Cordialement' },
                'consultative': { greeting: 'Bonjour', closing: 'Très cordialement' }
            };
            return tones[tone] || tones.friendly;
        }

        function getTimingByStage(stage) {
            const timings = {
                'discovery': { email1: 'J+1', email2: 'J+4', email3: 'J+8', email4: 'J+15', email5: 'J+22' },
                'demo': { email1: 'J+1', email2: 'J+3', email3: 'J+7', email4: 'J+12', email5: 'J+18' },
                'poc': { email1: 'J+2', email2: 'J+5', email3: 'J+10', email4: 'J+17', email5: 'J+25' },
                'negotiation': { email1: 'J+1', email2: 'J+3', email3: 'J+6', email4: 'J+10', email5: 'J+14' },
                'closing': { email1: 'J+1', email2: 'J+2', email3: 'J+4', email4: 'J+7', email5: 'J+10' }
            };
            return timings[stage] || timings.discovery;
        }

        function generateSubject(context, emailNumber) {
            const subjects = {
                1: `Suite de notre échange sur ${context.prospectCompany}`,
                2: `[${context.prospectCompany}] ROI de 250% - retour d'expérience client`,
                3: `${context.prospectName}, comment [Client similaire] a résolu le même défi`,
                4: `[Action requise] ${context.prospectCompany} - fenêtre d'opportunité`,
                5: `${context.prospectName}, dernière tentative avant archivage`
            };
            
            // Customize based on context
            if (context.mainObjection === 'budget') {
                subjects[2] = `[${context.prospectCompany}] Financement facilité - options disponibles`;
            }
            if (context.dealStage === 'closing') {
                subjects[4] = `[Urgent] ${context.prospectCompany} - signature avant fin de période`;
            }
            
            return subjects[emailNumber];
        }

        function generateEmailBody(context, emailNumber) {
            const tone = getToneSettings(context.communicationTone);
            const name = context.prospectName.split(' ')[0]; // First name only
            
            const templates = {
                1: `${tone.greeting} ${name},

Suite à notre dernier échange, je souhaitais faire le point sur ${context.painPoint ? 'votre problématique de ' + context.painPoint.toLowerCase() : 'votre projet'}.

${context.lastInteraction === 'demo-positive' ? 
    'J\'ai bien noté votre intérêt pour notre solution lors de la démonstration.' : 
    'J\'aimerais m\'assurer que j\'ai bien cerné vos enjeux.'}

Pour ${context.prospectCompany}, ${context.roiBenefit || 'notre solution pourrait apporter une valeur significative'}.

Avez-vous pu échanger en interne ? Quelles sont vos questions prioritaires à ce stade ?

Je reste disponible pour un point rapide cette semaine.

${tone.closing},
[Votre nom]`,

                2: `${tone.greeting} ${name},

Je repensais à votre situation chez ${context.prospectCompany}, notamment ${context.painPoint ? 'sur ' + context.painPoint.toLowerCase() : 'sur vos défis actuels'}.

Un de nos clients dans le ${context.prospectCompany.includes('Tech') ? 'secteur technologique' : 'même secteur'} avait exactement le même enjeu.

Résultat après 6 mois : ${context.roiBenefit || '30% d\'amélioration de la productivité et ROI de 250%'}.

Seriez-vous intéressé par un retour d'expérience détaillé ? Je peux organiser un échange avec leur équipe projet.

Quand pourriez-vous consacrer 15 minutes à ce sujet ?

${tone.closing},
[Votre nom]`,

                3: `${tone.greeting} ${name},

J'ai pensé à ${context.prospectCompany} en lisant cette étude sectorielle.

${context.personalityType === 'analytical' ? 
    'Les données montrent que 73% des entreprises de votre taille qui ne modernisent pas leurs process perdent en moyenne 15% de parts de marché en 2 ans.' :
    'La tendance du marché pousse clairement vers l\'automatisation des process manuels.'}

${context.mainObjection === 'budget' ? 
    'Je comprends les contraintes budgétaires. C\'est pour ça que nous avons développé des options de financement étalé.' :
    'C\'est exactement pour anticiper ces évolutions que des entreprises comme [Nom Client] ont pris les devants.'}

Voulez-vous que je vous partage cette analyse et comment [Nom Client] s'y est pris ?

Disponible demain ou vendredi pour un point rapide.

${tone.closing},
[Votre nom]`,

                4: `${tone.greeting} ${name},

Information importante concernant ${context.prospectCompany}.

${context.dealStage === 'closing' ? 
    'Nous arrivons en fin de trimestre avec des conditions préférentielles qui ne seront plus disponibles après le 30.' :
    'Nous avons une fenêtre d\'opportunité intéressante ce mois-ci.'}

${context.personalityType === 'decisive' ? 
    'En résumé : décision avant fin de mois = 15% de remise + accompagnement renforcé.' :
    'Concrètement, cela représente une économie de [X]k€ sur votre projet plus un accompagnement premium.'}

${context.mainObjection ? 
    'Je sais que vous aviez des interrogations sur ' + context.mainObjection + '. Je peux y répondre définitivement cette semaine.' :
    'Tous les éléments semblent alignés de votre côté.'}

Pouvez-vous consacrer 20 minutes à une visio cette semaine pour boucler ?

${tone.closing},
[Votre nom]`,

                5: `${tone.greeting} ${name},

Je n'ai pas eu de retour à mes derniers messages concernant le projet ${context.prospectCompany}.

Deux possibilités :
1) Le timing n'est plus d'actualité de votre côté
2) Mes messages se perdent dans votre boîte mail

${context.relationshipLevel === 'champion' ?
    'Vu nos échanges précédents, j\'imagine que c\'est plutôt l\'option 2.' :
    'Dans les deux cas, pas de souci.'}

Si c'est 1) → un simple "pas d'actualité" me suffit et je vous recontacterai dans 6 mois.

Si c'est 2) → peut-on caler 10 minutes au téléphone pour faire le point ?

Sinon, je classe le dossier et vous souhaite plein de réussite pour la suite.

${tone.closing},
[Votre nom]

PS : Si le sujet redevient d'actualité, n'hésitez pas à me recontacter directement.`
            };
            
            return templates[emailNumber];
        }

        function getEmailTip(emailNumber, context) {
            const tips = {
                1: "Envoie le lendemain de votre dernier contact. Optimal : 9h-11h en semaine.",
                2: "Apporte de la valeur avec une success story. Évite de vendre directement.",
                3: "Social proof + data = combo gagnant. Personnalise avec des métriques sectorielles.",
                4: "Crée de l'urgence sans être agressif. Propose une solution win-win.",
                5: "Permission-based breakup. Souvent le plus efficace de la séquence !"
            };
            
            if (context.personalityType === 'analytical' && emailNumber === 2) {
                return "Pour un profil analytique, ajoute des chiffres et métriques précises.";
            }
            
            return tips[emailNumber];
        }

        function copyEmail(index) {
            const emailContent = document.querySelectorAll('.email-preview')[index].textContent;
            
            if (navigator.clipboard) {
                navigator.clipboard.writeText(emailContent).then(() => {
                    // Show feedback
                    const button = event.target.closest('button');
                    const originalText = button.innerHTML;
                    button.innerHTML = '<i class="fas fa-check mr-1"></i>Copié !';
                    button.style.color = 'var(--green)';
                    
                    setTimeout(() => {
                        button.innerHTML = originalText;
                        button.style.color = '';
                    }, 2000);
                });
            }
        }

        function createRadarChart() {
            const ctx = document.getElementById('radarChart').getContext('2d');
            
            // Calculate scores for each dimension
            const dimensions = [
                'Comité de décision',
                'Champion',
                'Budget',
                'Pain Points',
                'Processus',
                'Concurrence',
                'Next Steps',
                'ROI Validé'
            ];
            
            const scores = [
                getAnswerScore(2), // Comité de décision
                getAnswerScore(3), // Champion
                getAnswerScore(4), // Budget
                getAnswerScore(5), // Pain Points
                getAnswerScore(6), // Processus
                getAnswerScore(7), // Concurrence
                getAnswerScore(8), // Next Steps
                getAnswerScore(13) // ROI
            ];
            
            new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: dimensions,
                    datasets: [{
                        label: 'Ton Deal',
                        data: scores,
                        backgroundColor: 'rgba(252, 120, 98, 0.2)',
                        borderColor: 'var(--orange)',
                        borderWidth: 2,
                        pointBackgroundColor: 'var(--orange)',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2,
                        pointRadius: 6
                    }, {
                        label: 'Deal Optimal',
                        data: [10, 10, 10, 10, 10, 10, 10, 10],
                        backgroundColor: 'rgba(130, 154, 255, 0.1)',
                        borderColor: 'var(--blue)',
                        borderWidth: 1,
                        borderDash: [5, 5],
                        pointRadius: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        r: {
                            beginAtZero: true,
                            max: 10,
                            grid: {
                                color: 'rgba(0, 0, 0, 0.1)'
                            },
                            pointLabels: {
                                font: {
                                    size: 12,
                                    weight: 'bold'
                                }
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            position: 'bottom'
                        }
                    }
                }
            });
        }

        function getAnswerScore(questionIndex) {
            const answer = answers[questionIndex];
            if (!answer) return 2;
            
            if (Array.isArray(answer)) {
                return Math.min(answer.length * 2, 10);
            }
            
            if (answer.includes('Oui') || answer.includes('confirmé') || answer.includes('complet')) return 10;
            if (answer.includes('Partiellement') || answer.includes('évoqué')) return 6;
            if (answer.includes('Non') || answer.includes('Aucun')) return 2;
            return 4;
        }
    


        window.__genspark_remove_badge_link = "https://www.genspark.ai/api/html_badge/" +
            "remove_badge?token=To%2FBnjzloZ3UfQdcSaYfDtOfJhv6vUfw5sjIkzhUXAy%2F8GNC%2F%2Be%2Bj68bQ6qq0hGbKFUh1623nbPVEBDw1shdzJbO0A9dI0Q%2BCJVEnNS0zf6maxxauayyycKxT1iiKqkoqdy2p5fh4NSONYgp1UIEheC3H86JtfZMXjKViRqVLctqfezhuYXiNNTyLo%2F1HENLmjaxYkwJyd8ZwtEz2qQy9w3C2t%2B3cIe%2FU%2BgBe4%2BgDpAjKDdqDeiPUTt0IprR9fphbs3aXI4YSB8N54c49%2F6%2FnOkU%2BJgR2l3gjeukfQRXiAZpSpL%2Fs6ZHLDsNjjpcvx1%2FUnw0rlKSBqA%2F%2Bffqi8wTJwJERmTM32mxDHZYXtvW7dMooCqlkrlKyUxxUnL35ku%2Fa93NBVXM0ERHodtQg9lT5v0AOrADTIa%2FLS6PJQQUVA6eeOoyEpyrTHXxEinZpzBg6RRRWl8QB3bN5QSIdPbFeqZPLkB2FIdJPvthx9KtmrLJWh8hIRBJs2142F%2FuPs9Asq6zh9iixVxI1yxo42D8BhgeGOolDTidqoaPlvciYDjtx1UMauKrUt3OGYbVx%2F04";
        window.__genspark_locale = "en-US";
        window.__genspark_token = "To/BnjzloZ3UfQdcSaYfDtOfJhv6vUfw5sjIkzhUXAy/8GNC/+e+j68bQ6qq0hGbKFUh1623nbPVEBDw1shdzJbO0A9dI0Q+CJVEnNS0zf6maxxauayyycKxT1iiKqkoqdy2p5fh4NSONYgp1UIEheC3H86JtfZMXjKViRqVLctqfezhuYXiNNTyLo/1HENLmjaxYkwJyd8ZwtEz2qQy9w3C2t+3cIe/U+gBe4+gDpAjKDdqDeiPUTt0IprR9fphbs3aXI4YSB8N54c49/6/nOkU+JgR2l3gjeukfQRXiAZpSpL/s6ZHLDsNjjpcvx1/Unw0rlKSBqA/+ffqi8wTJwJERmTM32mxDHZYXtvW7dMooCqlkrlKyUxxUnL35ku/a93NBVXM0ERHodtQg9lT5v0AOrADTIa/LS6PJQQUVA6eeOoyEpyrTHXxEinZpzBg6RRRWl8QB3bN5QSIdPbFeqZPLkB2FIdJPvthx9KtmrLJWh8hIRBJs2142F/uPs9Asq6zh9iixVxI1yxo42D8BhgeGOolDTidqoaPlvciYDjtx1UMauKrUt3OGYbVx/04";
    

