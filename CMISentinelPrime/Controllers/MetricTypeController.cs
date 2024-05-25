using CMISentinelPrime.Models;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web.Mvc;

namespace CMISentinelPrime.Controllers
{
    public class MetricTypeController : Controller
    {
        private CMIModelContainer db = new CMIModelContainer();

        // GET: MetricType
        public ActionResult Index()
        {
            return View(db.MetricTypeSet.ToList());
        }

        // GET: MetricType/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            MetricType metricType = db.MetricTypeSet.Find(id);
            if (metricType == null)
            {
                return HttpNotFound();
            }
            return View(metricType);
        }

        // GET: MetricType/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: MetricType/Create
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que quiere enlazarse. Para obtener 
        // más detalles, vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id")] MetricType metricType)
        {
            if (ModelState.IsValid)
            {
                db.MetricTypeSet.Add(metricType);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(metricType);
        }

        // GET: MetricType/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            MetricType metricType = db.MetricTypeSet.Find(id);
            if (metricType == null)
            {
                return HttpNotFound();
            }
            return View(metricType);
        }

        // POST: MetricType/Edit/5
        // Para protegerse de ataques de publicación excesiva, habilite las propiedades específicas a las que quiere enlazarse. Para obtener 
        // más detalles, vea https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id")] MetricType metricType)
        {
            if (ModelState.IsValid)
            {
                db.Entry(metricType).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(metricType);
        }

        // GET: MetricType/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            MetricType metricType = db.MetricTypeSet.Find(id);
            if (metricType == null)
            {
                return HttpNotFound();
            }
            return View(metricType);
        }

        // POST: MetricType/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            MetricType metricType = db.MetricTypeSet.Find(id);
            db.MetricTypeSet.Remove(metricType);
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
