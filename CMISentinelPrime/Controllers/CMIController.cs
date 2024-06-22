using CMISentinelPrime.Models;
using CMISentinelPrime.ViewModels;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web.Mvc;

namespace CMISentinelPrime.Controllers
{
    public class CMIController : Controller
    {
        private CMIModelContainer db = new CMIModelContainer();

        // GET: CMI
        public ActionResult Index()
        {
            return View(db.CMISet.ToList());
        }

        // GET: CMI/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            CMI cMI = db.CMISet
                .Include("Objective.Perspective")
                .Include("Objective.Indicator")
                .FirstOrDefault(c => c.Id == id);

            if (cMI == null)
            {
                return HttpNotFound();
            }

            var perspectives = db.PerspectiveSet.ToList();
            var objectivesByPerspective = new Dictionary<int, List<Objective>>();
            var indicatorsByObjective = new Dictionary<int, List<Indicator>>();
            var metricTypes = db.MetricTypeSet.ToList();

            foreach (var perspective in perspectives)
            {
                objectivesByPerspective[perspective.Id] = cMI.Objective
                                                             .Where(o => o.PerspectiveId == perspective.Id)
                                                             .ToList();
            }

            foreach (var objective in cMI.Objective)
            {
                indicatorsByObjective[objective.Id] = objective.Indicator.ToList();
            }

            CMIWithPerspectivesViewModel viewModel = new CMIWithPerspectivesViewModel
            {
                CMI = cMI,
                Perspectives = perspectives,
                ObjectivesByPerspective = objectivesByPerspective,
                IndicatorsByObjective = indicatorsByObjective,
                MetricTypes = metricTypes
            };

            return View(viewModel);
        }

        // POST: CMI/Create
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que quiere enlazarse. Para obtener 
        // más detalles, vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Name,TimePeriod")] CMI cMI)
        {
            if (ModelState.IsValid)
            {
                db.CMISet.Add(cMI);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(cMI);
        }

        // GET: CMI/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            CMI cMI = db.CMISet.Find(id);
            if (cMI == null)
            {
                return HttpNotFound();
            }
            return View(cMI);
        }

        // POST: CMI/Edit/5
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que quiere enlazarse. Para obtener 
        // más detalles, vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Name,TimePeriod")] CMI cMI)
        {
            if (ModelState.IsValid)
            {
                db.Entry(cMI).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(cMI);
        }

        // POST: CMI/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            CMI cMI = db.CMISet.Find(id);
            db.CMISet.Remove(cMI);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
